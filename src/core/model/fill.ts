/* eslint-disable no-param-reassign */
import { ModelInstance, ModelKey, ModelValues } from '@/core/model/types';

export default function fill<I extends ModelInstance>(
  instance: I,
  values: Partial<ModelValues<I>>,
) {
  Object.entries(values).forEach(([key, value]) => {
    instance[key as ModelKey<I>] = value;
  });

  return instance;
}
