import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { context } from '@/core/actions';
import makeAction from '@/core/actions/makeAction';
import { deepParamsSerializer } from '@/http';
import { JsonApiAdapter, JsonApiDeserializer, JsonApiSerializer } from '@/jsonapi';

/**
 * Create the dependencies and action factory to interact with a
 * JSON:API backend.
 *
 * @param config
 */
export default function makeJsonApi<
  Extension extends {} = {},
>(config: {
  baseURL?: string;
  extensions?: Extension;
} = {}) {
  const cache = makeCache();
  const registry = makeRegistry();
  const adapter = new JsonApiAdapter({
    baseURL: config.baseURL,
    paramsSerializer: deepParamsSerializer,
  });
  const deserializer = new JsonApiDeserializer();
  const serializer = new JsonApiSerializer();

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
