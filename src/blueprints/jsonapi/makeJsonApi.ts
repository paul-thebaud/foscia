import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { Action, withAdapter, withCache, withDeserializer, withRegistry, withSerializer } from '@/core';
import makeActionClass from '@/core/actions/makeActionClass';
import { deepParamsSerializer } from '@/http';
import { JsonApiAdapter, JsonApiDeserializer, JsonApiSerializer } from '@/jsonapi';

/**
 * Create the dependencies and action factory to interact with a
 * JSON:API backend.
 *
 * @param config
 */
export default function makeJsonApi<Extension extends {} = {}>(config: {
  baseURL?: string;
  extension?: Extension;
} = {}) {
  const cache = makeCache();
  const registry = makeRegistry();
  const adapter = new JsonApiAdapter({
    baseURL: config.baseURL,
    paramsSerializer: deepParamsSerializer,
  });
  const deserializer = new JsonApiDeserializer();
  const serializer = new JsonApiSerializer();

  const ActionClass = makeActionClass(config.extension);
  const prepareAction = <C extends {}, E extends {}>(action: Action<C, E>) => action
    .use(withCache(cache))
    .use(withRegistry(registry))
    .use(withAdapter(adapter))
    .use(withDeserializer(deserializer))
    .use(withSerializer(serializer));
  const makeAction = () => new ActionClass().use(prepareAction);

  return {
    cache,
    registry,
    adapter,
    deserializer,
    serializer,
    makeAction,
    prepareAction,
  };
}
