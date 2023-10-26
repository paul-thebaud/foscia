import { ModelClass } from '@foscia/core/model/types';

export default function cloneModelValue<T>(model: ModelClass, value: T) {
  if (model.$config.cloneValue) {
    return model.$config.cloneValue(value);
  }

  return value;
}
