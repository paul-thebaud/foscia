import { ModelId, ModelIdType } from '@/core/model/types';
import { Transform } from '@/core/transformers/types';

export type IdOptions<T> = Transform<T | null> | {
  transformer?: Transform<T | null> | undefined;
};

export default function makeId<K extends 'id' | 'lid', T extends ModelIdType | null = ModelIdType>(
  key: K,
  config: Transform<T | null> | IdOptions<T>,
): ModelId<K, T> {
  if (typeof config === 'function'
    || ('serialize' in config && 'deserialize' in config)
  ) {
    return { key, $MODEL_TYPE: key, transformer: config };
  }

  return { key, $MODEL_TYPE: key, ...config };
}
