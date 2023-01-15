import makeAction from '@/blueprints/makeAction';
import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { withAdapter, withCache, withDeserializer, withRegistry, withSerializer } from '@/core';
import { deepParamsSerializer } from '@/http';
import { JsonApiAdapter, JsonApiDeserializer, JsonApiSerializer } from '@/jsonapi';

/**
 * Create the dependencies and action factory to interact with a
 * JSON:API backend.
 *
 * @param config
 */
export default function makeJsonApi(config: {
  baseURL?: string;
} = {}) {
  const cache = makeCache();

  const registry = makeRegistry();

  const adapter = new JsonApiAdapter({
    baseURL: config.baseURL,
    paramsSerializer: deepParamsSerializer,
  });

  const deserializer = new JsonApiDeserializer();

  const serializer = new JsonApiSerializer();

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
