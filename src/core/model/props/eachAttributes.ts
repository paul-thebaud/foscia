import isAttributeDef from '@/core/model/props/checks/isAttributeDef';
import { ModelAttribute, ModelInstance } from '@/core/model/types';

export default function eachAttributes<R>(
  instance: ModelInstance,
  callback: (def: ModelAttribute) => R,
) {
  return Object.values(instance.$model.$schema).reduce((stack, def) => {
    if (isAttributeDef(def)) {
      stack.push(callback(def));
    }

    return stack;
  }, [] as R[]);
}
