import { Action, ActionParsedExtension, makeEnhancersExtension } from '@/core';
import makeRequest from '@/http/actions/context/enhancers/makeRequest';
import { HttpRequestConfig } from '@/http/types';

/**
 * HTTP PUT method shortcut for the {@link makeRequest} function.
 *
 * @param pathOrBaseURL
 * @param body
 * @param config
 *
 * @category Enhancers
 */
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

type MakePutEnhancerExtension = ActionParsedExtension<{
  makePut<C extends {}, E extends {}>(
    this: Action<C, E>,
    pathOrBaseURL: string,
    body?: HttpRequestConfig['body'],
    config?: Omit<HttpRequestConfig, 'method' | 'body'>,
  ): Action<C, E>;
}>;

makePut.extension = makeEnhancersExtension({ makePut }) as MakePutEnhancerExtension;
