import makeRequest from '@/http/actions/context/enhancers/makeRequest';
import { HttpRequestConfig } from '@/http/types';

export default function makePut(
  pathOrBaseURL: string,
  body?: HttpRequestConfig['body'],
  config?: Omit<HttpRequestConfig, 'method' | 'body'>,
) {
  return makeRequest(pathOrBaseURL, {
    method: 'PUT',
    body,
    ...config,
  });
}
