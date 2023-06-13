import isIdDef from '@/core/model/props/checks/isIdDef';
import { ModelId, ModelInstance, ModelKey } from '@/core/model/types';

export default function eachIds<I extends ModelInstance, R>(
  instance: I,
  callback: (def: ModelId<ModelKey<I>>) => R,
) {
  return Object.values(instance.$model.$schema).reduce((stack, def) => {
    if (isIdDef(def)) {
      stack.push(callback(def));
    }

    return stack;
  }, [] as R[]);
}
