import { ActionContext } from '@/core';
import { Awaitable, Dictionary } from '@/utilities';

export type HttpMethod =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';

export type HttpRequestConfig = {
  method?: HttpMethod;
  baseURL?: string;
  path?: string;
  params?: Dictionary<any> | string;
  headers?: Dictionary<string>;
  // TODO "dataAs"?
  body?: unknown;
  signal?: AbortSignal | null;
  requestTransformers?: RequestTransformer[];
  responseTransformers?: ResponseTransformer[];
  errorTransformers?: ErrorTransformer[];
};

export type HttpAdapterConfig = {
  fetch?: typeof fetch;
  baseURL?: string;
  paramsSerializer?: HttpParamsSerializer;
  requestTransformers?: RequestTransformer[];
  responseTransformers?: ResponseTransformer[];
  errorTransformers?: ErrorTransformer[];
};

export type HttpActionContext = ActionContext & HttpRequestConfig;

export type HttpParamsSerializer = (params: Dictionary) => string | undefined;

export type HttpRequestInit = {
  method: HttpMethod;
  headers: Dictionary<string>;
  body: BodyInit;
  signal?: AbortSignal | null;
};

export type HttpRequest = {
  context: HttpActionContext;
  url: string;
  init: HttpRequestInit;
};

export type RequestTransformer = (request: HttpRequest) => Awaitable<HttpRequest>;
export type ResponseTransformer = (response: Response) => Awaitable<Response>;
export type ErrorTransformer = (error: unknown) => Awaitable<unknown>;
