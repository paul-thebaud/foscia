import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { context } from '@/core/actions';
import makeAction from '@/core/actions/makeAction';
import HttpAdapter from '@/http/adapter/httpAdapter';
import { JsonRestDeserializer, JsonRestSerializer } from '@/jsonrest';

/**
 * Create the dependencies and action factory to interact with a
 * JSON REST backend.
 *
 * @param config
 */
export default function makeJsonRest<Extension extends {} = {}>(config: {
  baseURL?: string;
  extensions?: Extension;
} = {}) {
  const cache = makeCache();
  const registry = makeRegistry();
  const adapter = new HttpAdapter({
    baseURL: config.baseURL ?? '/api',
    defaultBodyAs: (body) => JSON.stringify(body),
    defaultHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const deserializer = new JsonRestDeserializer();
  const serializer = new JsonRestSerializer();

  const Action = makeAction(config.extensions);
  const withDependencies = context({
    cache, registry, adapter, deserializer, serializer,
  });

  return {
    cache,
    registry,
    adapter,
    deserializer,
    serializer,
    withDependencies,
    Action,
    action: () => new Action().use(withDependencies),
  };
}
