import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { context } from '@/core/actions';
import makeAction from '@/core/actions/makeAction';
import { deepParamsSerializer } from '@/http';
import { JsonApiDeserializer, JsonApiSerializer } from '@/jsonapi';
import JsonApiAdapter from '@/jsonapi/jsonApiAdapter';
import { toKebab } from '@/utilities';

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
    baseURL: config.baseURL ?? '/api/v1',
    paramsSerializer: deepParamsSerializer,
    modelPathTransformer: toKebab,
    relationPathTransformer: toKebab,
    defaultBodyAs: (body) => JSON.stringify(body),
    defaultHeaders: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
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
