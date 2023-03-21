import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import { context, makeAction } from '@/core';
import guessRelationType from '@/core/model/utilities/relations/guessRelationType';
import { bodyAsJson, HttpAdapter } from '@/http';
import { RestDeserializer, RestSerializer } from '@/rest';
import { toKebab } from '@/utilities';

/**
 * Create the dependencies and action factory to interact with a
 * JSON REST backend.
 *
 * @param config
 */
export default function makeJsonRest<Extension extends {} = {}>(config: {
  baseURL?: string;
  extensions?: Extension;
} = {}) {
  const cache = makeCache();
  const registry = makeRegistry({
    normalizeType: toKebab,
    prepareModel: (model) => model.configure({
      normalizePath: toKebab,
      guessRelationType: (_, def) => guessRelationType(def),
    }),
  });
  const adapter = new HttpAdapter({
    baseURL: config.baseURL ?? '/api',
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
