import { AdapterI } from '@/core';
import paramsSerializer from '@/http/utilities/paramsSerializer';
import AbortedError from '@/http/errors/abortedError';
import ConflictError from '@/http/errors/conflictError';
import ForbiddenError from '@/http/errors/forbiddenError';
import InterruptedError from '@/http/errors/interruptedError';
import InvalidRequestError from '@/http/errors/invalidRequestError';
import NotFoundError from '@/http/errors/notFoundError';
import ServerError from '@/http/errors/serverError';
import TooManyRequestsError from '@/http/errors/tooManyRequestsError';
import UnauthorizedError from '@/http/errors/unauthorizedError';
import {
  BodyAsTransformer,
  ErrorTransformer,
  HttpActionContext,
  HttpAdapterConfig,
  HttpMethod,
  HttpParamsSerializer,
  HttpRequest,
  HttpRequestInit,
  PathTransformer,
  RequestTransformer,
  ResponseTransformer,
} from '@/http/types';
import { assignConfig, Dictionary, isNil, optionalJoin, sequentialTransform } from '@/utilities';

/**
 * Adapter implementation for HTTP interaction using fetch.
 */
export default class HttpAdapter implements AdapterI<Response> {
  private fetch = globalThis.fetch;

  private paramsSerializer: HttpParamsSerializer = paramsSerializer;

  private baseURL: string | null = null;

  private defaultHeaders: Dictionary<string> = {};

  private defaultBodyAs: BodyAsTransformer | null = null;

  private requestTransformers: RequestTransformer[] = [];

  private responseTransformers: ResponseTransformer[] = [];

  private errorTransformers: ErrorTransformer[] = [];

  private modelPathTransformer: PathTransformer | null = null;

  private relationPathTransformer: PathTransformer | null = null;

  public constructor(config?: HttpAdapterConfig) {
    this.configure(config);
  }

  public configure(config?: HttpAdapterConfig) {
    assignConfig(this, config);

    return this;
  }

  /**
   * @inheritDoc
   */
  public async execute(context: HttpActionContext): Promise<Response> {
    const request = await this.transformRequest(context, await this.makeRequest(context));

    let response: Response;
    try {
      response = await this.runRequest(request);
    } catch (error) {
      throw await this.transformError(
        context,
        await this.makeRequestError(request, error),
      );
    }

    if (response.status >= 200 && response.status < 300) {
      return this.transformResponse(context, response);
    }

    throw await this.transformError(
      context,
      await this.makeResponseError(request, response),
    );
  }

  /**
   * @inheritDoc
   */
  public isNotFound(error: unknown) {
    return error instanceof NotFoundError;
  }

  protected async makeRequest(context: HttpActionContext): Promise<HttpRequest> {
    return {
      context,
      url: await this.makeRequestURL(context),
      init: await this.makeRequestInit(context),
    };
  }

  protected async makeRequestURL(context: HttpActionContext) {
    return optionalJoin([
      this.makeRequestURLEndpoint(context),
      this.makeRequestURLParams(context),
    ], '?');
  }

  /**
   * Create the request init object from the given context.
   * May also affect the headers and body.
   *
   * @param context
   */
  protected async makeRequestInit(context: HttpActionContext) {
    const method = this.makeRequestMethod(context).toUpperCase();
    let headers = { ...this.defaultHeaders };
    let body = context.body ?? context.data;

    if (body instanceof FormData || body instanceof URLSearchParams) {
      delete headers['Content-Type'];
    }

    headers = { ...headers, ...context.headers };

    const bodyAs = context.bodyAs ?? this.defaultBodyAs;
    if (bodyAs && body !== undefined) {
      body = await bodyAs(body, headers);
    }

    return {
      method,
      headers,
      body,
      signal: context.signal,
    } as HttpRequestInit;
  }

  protected makeRequestMethod(context: HttpActionContext): HttpMethod {
    if (context.method) {
      return context.method;
    }

    const actionsMethodsMap: Dictionary = {
      read: 'GET',
      create: 'POST',
      update: 'PATCH',
      destroy: 'DELETE',
    };
    if (context.action && actionsMethodsMap[context.action]) {
      return actionsMethodsMap[context.action] as HttpMethod;
    }

    return 'GET';
  }

  protected makeRequestURLEndpoint(context: HttpActionContext) {
    const modelPathTransformer = this.modelPathTransformer ?? ((path: string) => path);
    const relationPathTransformer = this.relationPathTransformer ?? ((path: string) => path);

    return optionalJoin([
      isNil(context.baseURL) ? this.baseURL : context.baseURL,
      isNil(context.modelPath) ? undefined : modelPathTransformer(context.modelPath),
      isNil(context.id) ? undefined : `${context.id}`,
      isNil(context.relationPath) ? undefined : relationPathTransformer(context.relationPath),
      context.path,
    ], '/');
  }

  protected makeRequestURLParams(context: HttpActionContext) {
    if (typeof context.params === 'string') {
      return this.makeRequestURLParamsFromString(context, context.params);
    }

    if (context.params) {
      return this.makeRequestURLParamsFromObject(context, context.params);
    }

    return undefined;
  }

  protected makeRequestURLParamsFromString(_context: HttpActionContext, params: string) {
    return params;
  }

  protected makeRequestURLParamsFromObject(_context: HttpActionContext, params: Dictionary) {
    return this.paramsSerializer(params);
  }

  protected runRequest(request: HttpRequest) {
    // Destructure to avoid calling fetch with this context.
    const { fetch } = this;

    return fetch(request.url, request.init);
  }

  protected async makeRequestError(request: HttpRequest, error: unknown): Promise<unknown> {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return new AbortedError(error.message, request, error);
    }

    return new InterruptedError(
      error instanceof Error ? error.message : 'Unknown fetch adapter error',
      request,
      error,
    );
  }

  protected async makeResponseError(request: HttpRequest, response: Response): Promise<unknown> {
    switch (true) {
      case response.status >= 500:
        return new ServerError(request, response);
      case response.status === 401:
        return new UnauthorizedError(request, response);
      case response.status === 403:
        return new ForbiddenError(request, response);
      case response.status === 404:
        return new NotFoundError(request, response);
      case response.status === 409:
        return new ConflictError(request, response);
      case response.status === 429:
        return new TooManyRequestsError(request, response);
      default:
        return new InvalidRequestError(request, response);
    }
  }

  protected transformRequest(context: HttpActionContext, request: HttpRequest) {
    return sequentialTransform([
      ...this.requestTransformers,
      ...(context.requestTransformers ?? []),
    ], request);
  }

  protected transformResponse(context: HttpActionContext, response: Response) {
    return sequentialTransform([
      ...this.responseTransformers,
      ...(context.responseTransformers ?? []),
    ], response);
  }

  protected transformError(context: HttpActionContext, error: unknown): unknown {
    return sequentialTransform([
      ...this.errorTransformers,
      ...(context.errorTransformers ?? []),
    ], error);
  }
}
