import {
  AdapterI,
  consumeAction,
  consumeData,
  consumeId,
  consumeModel,
  consumeRelation,
} from '@foscia/core';
import AbortedError from '@foscia/http/errors/abortedError';
import ConflictError from '@foscia/http/errors/conflictError';
import ForbiddenError from '@foscia/http/errors/forbiddenError';
import InterruptedError from '@foscia/http/errors/interruptedError';
import InvalidRequestError from '@foscia/http/errors/invalidRequestError';
import NotFoundError from '@foscia/http/errors/notFoundError';
import ServerError from '@foscia/http/errors/serverError';
import TooManyRequestsError from '@foscia/http/errors/tooManyRequestsError';
import UnauthorizedError from '@foscia/http/errors/unauthorizedError';
import {
  BodyAsTransformer,
  ErrorTransformer,
  HttpAdapterConfig,
  HttpMethod,
  HttpParamsSerializer,
  HttpRequest,
  HttpRequestConfig,
  HttpRequestInit,
  RequestTransformer,
  ResponseTransformer,
} from '@foscia/http/types';
import paramsSerializer from '@foscia/http/utilities/paramsSerializer';
import { applyConfig, Dictionary, isNil, optionalJoin, sequentialTransform } from '@foscia/utils';

/**
 * Adapter implementation for HTTP interaction using fetch.
 */
export default class HttpAdapter implements AdapterI<Response> {
  private baseURL: string | null = null;

  private fetch = globalThis.fetch;

  private serializeParams: HttpParamsSerializer = paramsSerializer;

  private defaultHeaders: Dictionary<string> = {};

  private defaultBodyAs: BodyAsTransformer | null = null;

  private requestTransformers: RequestTransformer[] = [];

  private responseTransformers: ResponseTransformer[] = [];

  private errorTransformers: ErrorTransformer[] = [];

  public constructor(config?: HttpAdapterConfig) {
    this.configure(config ?? {});
  }

  public configure(config: HttpAdapterConfig, override = true) {
    applyConfig(this, config, override);
  }

  /**
   * @inheritDoc
   */
  public async execute(context: HttpRequestConfig): Promise<Response> {
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

  protected async makeRequest(context: HttpRequestConfig): Promise<HttpRequest> {
    return {
      context,
      url: await this.makeRequestURL(context),
      init: await this.makeRequestInit(context),
    };
  }

  protected async makeRequestURL(context: HttpRequestConfig) {
    return optionalJoin([
      await this.makeRequestURLEndpoint(context),
      await this.makeRequestURLParams(context),
    ], '?');
  }

  /**
   * Create the request init object from the given context.
   * May also affect the headers and body.
   *
   * @param context
   */
  protected async makeRequestInit(context: HttpRequestConfig) {
    const method = (await this.makeRequestMethod(context)).toUpperCase();
    let headers = { ...this.defaultHeaders };
    let body = context.body ?? consumeData(context, null) ?? undefined;

    const keepBodyFormat = body instanceof FormData || body instanceof URLSearchParams;
    if (keepBodyFormat) {
      delete headers['Content-Type'];
    }

    headers = { ...headers, ...context.headers };

    const bodyAs = context.bodyAs ?? this.defaultBodyAs;
    if (bodyAs && body !== undefined && !keepBodyFormat) {
      body = await bodyAs(body, headers);
    }

    return {
      method,
      headers,
      body,
      signal: context.signal,
    } as HttpRequestInit;
  }

  protected async makeRequestMethod(context: HttpRequestConfig): Promise<HttpMethod> {
    if (context.method) {
      return context.method;
    }

    const action = consumeAction(context, null);
    const actionsMethodsMap: Dictionary = {
      read: 'GET',
      create: 'POST',
      update: 'PATCH',
      destroy: 'DELETE',
    };
    if (action && actionsMethodsMap[action]) {
      return actionsMethodsMap[action] as HttpMethod;
    }

    return 'GET';
  }

  protected async makeRequestURLEndpoint(context: HttpRequestConfig) {
    const model = consumeModel(context, null);
    const id = consumeId(context, null);
    const relation = consumeRelation(context, null);

    const modelPaths = context.modelPaths !== false ? [
      isNil(model)
        ? undefined
        : (model.$config.path ?? (model.$config.guessPath ?? ((t) => t))(model.$type)),
      isNil(id)
        ? undefined
        : String(id),
      isNil(relation)
        ? undefined
        : (relation.path ?? (model?.$config.guessRelationPath ?? ((k) => k))(relation.key)),
    ] : [];

    const requestEndpoint = optionalJoin([
      context.baseURL ?? model?.$config.baseURL ?? this.baseURL,
      ...modelPaths,
      context.path,
    ], '/');

    return this.clearRequestURLEndpoint(requestEndpoint);
  }

  protected clearRequestURLEndpoint(endpoint: string) {
    return endpoint.replace(/([^:]\/)\/+/g, '$1');
  }

  protected async makeRequestURLParams(context: HttpRequestConfig) {
    if (typeof context.params === 'string') {
      return this.makeRequestURLParamsFromString(context.params);
    }

    if (context.params) {
      return this.makeRequestURLParamsFromObject(context.params);
    }

    return undefined;
  }

  protected makeRequestURLParamsFromString(params: string) {
    return params;
  }

  protected makeRequestURLParamsFromObject(params: Dictionary) {
    return this.serializeParams(params);
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

  protected async transformRequest(context: HttpRequestConfig, request: HttpRequest) {
    return sequentialTransform([
      ...this.requestTransformers,
      ...(context.requestTransformers ?? []),
    ], request);
  }

  protected async transformResponse(context: HttpRequestConfig, response: Response) {
    return sequentialTransform([
      ...this.responseTransformers,
      ...(context.responseTransformers ?? []),
    ], response);
  }

  protected async transformError(context: HttpRequestConfig, error: unknown) {
    return sequentialTransform([
      ...this.errorTransformers,
      ...(context.errorTransformers ?? []),
    ], error);
  }
}
