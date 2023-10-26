import appendJsonApiParams from '@foscia/blueprints/jsonapi/appendJsonApiParams';
import makeCache from '@foscia/blueprints/makeCache';
import makeRegistry from '@foscia/blueprints/makeRegistry';
import { context, makeActionClass } from '@foscia/core';
import {
  bodyAsJson,
  deepParamsSerializer,
  ErrorTransformer,
  HttpAdapter,
  RequestTransformer,
  ResponseTransformer,
} from '@foscia/http';
import { JsonApiDeserializer, JsonApiSerializer } from '@foscia/jsonapi';
import { makeActionFactoryMockable } from '@foscia/test';
import { toKebabCase } from '@foscia/utils';

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
  requestTransformers?: RequestTransformer[];
  responseTransformers?: ResponseTransformer[];
  errorTransformers?: ErrorTransformer[];
  extensions?: Extension;
} = {}) {
  const cache = makeCache();
  const registry = makeRegistry({
    normalizeType: toKebabCase,
    prepareModel: (model) => model.configure({
      normalizePath: toKebabCase,
    }),
  });
  const adapter = new HttpAdapter({
    baseURL: config.baseURL ?? '/api/v1',
    requestTransformers: config.requestTransformers,
    responseTransformers: config.responseTransformers,
    errorTransformers: config.errorTransformers,
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

  const Action = makeActionClass(config.extensions);
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
    action: makeActionFactoryMockable(() => new Action().use(withDependencies)),
  };
}
