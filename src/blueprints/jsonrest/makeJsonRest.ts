import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { context } from '@/core/actions';
import makeAction from '@/core/actions/makeAction';
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

  const Action = makeAction(config.extension);
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
