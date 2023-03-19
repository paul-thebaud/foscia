import { ModelClass } from '@/core/model/types';

export default function compareModelValue(
  model: ModelClass,
  nextValue: unknown,
  prevValue: unknown,
) {
  if (model.$config.compareValue) {
    return model.$config.compareValue(nextValue, prevValue);
  }

  return nextValue === prevValue;
}
