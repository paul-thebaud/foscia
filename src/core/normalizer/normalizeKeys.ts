import consumeKeyNormalizer from '@/core/actions/context/consumers/consumeKeyNormalizer';
import { ModelClass } from '@/core/model/types';

export default function normalizeKeys(
  context: {},
  model: ModelClass,
  keys: string[],
): Promise<string[]> {
  const keyNormalizer = consumeKeyNormalizer(context, null);

  return keyNormalizer
    ? Promise.all(keys.map((key) => keyNormalizer.normalizeKey(model, key)))
    : Promise.resolve(keys);
}
