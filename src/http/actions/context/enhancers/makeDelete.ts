import { Action, ConsumeAdapter } from '@/core';
import makeRequest from '@/http/actions/context/enhancers/makeRequest';
import { HttpActionContext, HttpRequestConfig } from '@/http/types';

export default function makeDelete(
  pathOrBaseURL: string,
  body?: HttpRequestConfig['body'],
  config?: Omit<HttpRequestConfig, 'method' | 'body'>,
) {
  return <C extends HttpActionContext, AD>(action: Action<C & ConsumeAdapter<AD>>) => action
    .use(makeRequest(pathOrBaseURL, {
      method: 'POST',
      body,
      ...config,
    }));
}
