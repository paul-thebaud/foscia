import appendJsonApiParams from '@/blueprints/jsonapi/appendJsonApiParams';
import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { context, makeAction } from '@/core';
import { bodyAsJson, deepParamsSerializer, HttpAdapter } from '@/http';
import { JsonApiDeserializer, JsonApiSerializer } from '@/jsonapi';
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
  const registry = makeRegistry({
    normalizeType: toKebab,
    prepareModel: (model) => model.configure({
      normalizePath: toKebab,
    }),
  });
  const adapter = new HttpAdapter({
    baseURL: config.baseURL ?? '/api/v1',
    serializeParams: deepParamsSerializer,
    appendParams: appendJsonApiParams,
    defaultBodyAs: bodyAsJson,
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
