import { Action, ActionParsedExtension, makeEnhancersExtension } from '@/core';
import makeRequest from '@/http/actions/context/enhancers/makeRequest';
import { HttpRequestConfig } from '@/http/types';

/**
 * HTTP DELETE method shortcut for the {@link makeRequest} function.
 *
 * @param pathOrBaseURL
 * @param body
 * @param config
 *
 * @category Enhancers
 */
export default function makeDelete(
  pathOrBaseURL: string,
  body?: HttpRequestConfig['body'],
  config?: Omit<HttpRequestConfig, 'method' | 'body'>,
) {
  return makeRequest(pathOrBaseURL, {
    method: 'DELETE',
    body,
    ...config,
  });
}

type MakeDeleteEnhancerExtension = ActionParsedExtension<{
  makeDelete<C extends {}, E extends {}>(
    this: Action<C, E>,
    pathOrBaseURL: string,
    body?: HttpRequestConfig['body'],
    config?: Omit<HttpRequestConfig, 'method' | 'body'>,
  ): Action<C, E>;
}>;

makeDelete.extension = makeEnhancersExtension({ makeDelete }) as MakeDeleteEnhancerExtension;
