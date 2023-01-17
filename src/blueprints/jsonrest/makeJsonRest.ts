import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { Action, withAdapter, withCache, withDeserializer, withRegistry, withSerializer } from '@/core';
import makeActionClass from '@/core/actions/makeActionClass';
import { JsonRestAdapter, JsonRestDeserializer, JsonRestSerializer } from '@/jsonrest';

/**
 * Create the dependencies and action factory to interact with a
 * JSON REST backend.
 *
 * @param config
 */
export default function makeJsonRest<Extension extends {} = {}>(config: {
  baseURL?: string;
  extension?: Extension;
} = {}) {
  const cache = makeCache();
  const registry = makeRegistry();
  const adapter = new JsonRestAdapter({
    baseURL: config.baseURL,
  });
  const deserializer = new JsonRestDeserializer();
  const serializer = new JsonRestSerializer();

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
