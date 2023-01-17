import { context } from '@/core';
import { HttpRequestConfig } from '@/http/types';

export default function makeRequest(
  pathOrBaseURL: string,
  config?: HttpRequestConfig,
) {
  const [baseURL, path] = pathOrBaseURL.startsWith('/')
    ? [pathOrBaseURL, undefined]
    : [undefined, pathOrBaseURL];

  return context({ baseURL, path, ...config });
}
