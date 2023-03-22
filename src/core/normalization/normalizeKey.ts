import isAttributeDef from '@/core/model/props/checks/isAttributeDef';
import { ModelClass, ModelKey } from '@/core/model/types';
import normalize from '@/core/normalization/normalize';

export default function normalizeKey<D extends {}>(
  model: ModelClass<D>,
  key: ModelKey<ModelClass<D>>,
) {
  const def = model.$schema[key];

  return def.alias ?? normalize(String(def.key), (
    isAttributeDef(def) ? model.$config.normalizeAttributeKey : model.$config.normalizeRelationKey
  ) ?? model.$config.normalizeKey);
}
