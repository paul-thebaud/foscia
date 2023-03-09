import { ModelClass } from '@/core/model/types';

export default function compareModelValue(
  model: ModelClass,
  nextValue: unknown,
  prevValue: unknown,
) {
  if (model.$config.comparator) {
    return model.$config.comparator(nextValue, prevValue);
  }

  return nextValue === prevValue;
}
