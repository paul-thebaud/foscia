import { ModelInstance, ModelProp } from '@/core';
import { KeyTransformer } from '@/object/types';
import { value } from '@/utilities';

export default function normalizeKey(
  instance: ModelInstance,
  key: string,
  def: ModelProp,
  keyTransformer: KeyTransformer | null,
) {
  if (def.alias) {
    return value(def.alias, instance, key);
  }

  return keyTransformer ? keyTransformer(key) : key;
}
