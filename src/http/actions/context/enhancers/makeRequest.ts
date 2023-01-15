import { Action, ConsumeAdapter } from '@/core';
import httpContext from '@/http/actions/context/enhancers/httpContext';
import { HttpActionContext, HttpRequestConfig } from '@/http/types';

export default function makeRequest(
  pathOrBaseURL: string,
  config?: HttpRequestConfig,
) {
  return <C extends HttpActionContext, AD>(action: Action<C & ConsumeAdapter<AD>>) => {
    const [baseURL, path] = pathOrBaseURL.startsWith('/')
      ? [pathOrBaseURL, undefined]
      : [undefined, pathOrBaseURL];

    return action.use(httpContext({ baseURL, path, ...config }));
  };
}
