/* eslint-disable no-param-reassign */
import { ModelInstance, ModelMutableValues } from '@/core/model/types';

export default function fill<I extends ModelInstance>(
  instance: I,
  values: Partial<ModelMutableValues<I>>,
) {
  Object.entries(values).forEach(([key, value]) => {
    instance[key] = value;
  });

  return instance;
}
