import makeAction from '@/blueprints/makeAction';
import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { withAdapter, withCache, withDeserializer, withRegistry, withSerializer } from '@/core';
import { JsonRestAdapter, JsonRestDeserializer, JsonRestSerializer } from '@/jsonrest';

/**
 * Create the dependencies and action factory to interact with a
 * JSON REST backend.
 *
 * @param config
 */
export default function makeJsonRest(config: {
  baseURL?: string;
} = {}) {
  const cache = makeCache();

  const registry = makeRegistry();

  const adapter = new JsonRestAdapter({
    baseURL: config.baseURL,
  });

  const deserializer = new JsonRestDeserializer();

  const serializer = new JsonRestSerializer();

  return {
    cache,
    registry,
    adapter,
    deserializer,
    serializer,
    makeAction() {
      return makeAction()
        .use(withCache(cache))
        .use(withRegistry(registry))
        .use(withAdapter(adapter))
        .use(withDeserializer(deserializer))
        .use(withSerializer(serializer));
    },
  };
}
