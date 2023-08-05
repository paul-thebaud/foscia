import { context, makeActionClass } from '@/core';
import { HttpAdapter } from '@/http';
import { makeActionFactoryMockable } from '@/test';

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
  extensions?: Extension;
} = {}) {
  const adapter = new HttpAdapter({
    baseURL: config.baseURL ?? '/api/v1',
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
