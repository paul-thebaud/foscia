import makeRequest from '@/http/actions/context/enhancers/makeRequest';
import { HttpRequestConfig } from '@/http/types';

export default function makeGet(
  pathOrBaseURL: string,
  config?: Omit<HttpRequestConfig, 'method' | 'body'>,
) {
  return makeRequest(pathOrBaseURL, {
    method: 'GET',
    ...config,
  });
}
