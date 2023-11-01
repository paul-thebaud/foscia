import { ModelClass, ModelKey } from '@foscia/core/model/types';

export default function normalizeKey<D extends {}>(
  model: ModelClass<D>,
  key: ModelKey<ModelClass<D>>,
) {
  const def = model.$schema[key];

  return def.alias ?? (
    model.$config.normalizeKey ? model.$config.normalizeKey(def.key) : def.key
  );
}
