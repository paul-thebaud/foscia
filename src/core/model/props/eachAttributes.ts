import isAttributeDef from '@/core/model/props/checks/isAttributeDef';
import { ModelAttribute, ModelInstance, ModelKey } from '@/core/model/types';

export default function eachAttributes<I extends ModelInstance, R>(
  instance: I,
  callback: (def: ModelAttribute<ModelKey<I>>) => R,
) {
  return Object.values(instance.$model.$schema).reduce((stack, def) => {
    if (isAttributeDef(def)) {
      stack.push(callback(def));
    }

    return stack;
  }, [] as R[]);
}
