import { context, makeActionClass } from '@foscia/core';
import { ErrorTransformer, HttpAdapter, RequestTransformer, ResponseTransformer } from '@foscia/http';
import { makeActionFactoryMockable } from '@foscia/test';

/**
 * Create the dependencies and action factory to interact with any
 * HTTP backend using a simple client.
 *
 * @param config
 */
export default function makeHttpClient<
  Extension extends {} = {},
>(config: {
  baseURL?: string;
  requestTransformers?: RequestTransformer[];
  responseTransformers?: ResponseTransformer[];
  errorTransformers?: ErrorTransformer[];
  extensions?: Extension;
} = {}) {
  const adapter = new HttpAdapter({
    baseURL: config.baseURL ?? '/api/v1',
    requestTransformers: config.requestTransformers,
    responseTransformers: config.responseTransformers,
    errorTransformers: config.errorTransformers,
  });

  const Action = makeActionClass(config.extensions);
  const withDependencies = context({ adapter });

  return {
    adapter,
    withDependencies,
    Action,
    action: makeActionFactoryMockable(() => new Action().use(withDependencies)),
  };
}
