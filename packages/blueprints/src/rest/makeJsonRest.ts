import makeCache from '@foscia/blueprints/makeCache';
import makeRegistry from '@foscia/blueprints/makeRegistry';
import { context, guessRelationType, makeActionClass } from '@foscia/core';
import {
  bodyAsJson,
  ErrorTransformer,
  HttpAdapter,
  RequestTransformer,
  ResponseTransformer,
} from '@foscia/http';
import { RestDeserializer, RestSerializer } from '@foscia/rest';
import { makeActionFactoryMockable } from '@foscia/test';
import { toKebabCase } from '@foscia/utils';

/**
 * Create the dependencies and action factory to interact with a
 * JSON REST backend.
 *
 * @param config
 */
export default function makeJsonRest<Extension extends {} = {}>(config: {
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
      guessRelationType: (_, def) => guessRelationType(def),
    }),
  });
  const adapter = new HttpAdapter({
    baseURL: config.baseURL ?? '/api',
    requestTransformers: config.requestTransformers,
    responseTransformers: config.responseTransformers,
    errorTransformers: config.errorTransformers,
    defaultBodyAs: bodyAsJson,
    defaultHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const deserializer = new RestDeserializer({
    dataReader: (response) => (
      response.status === 204 ? undefined : response.json()
    ),
  });
  const serializer = new RestSerializer();

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
