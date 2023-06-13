import isRelationDef from '@/core/model/props/checks/isRelationDef';
import { ModelInstance, ModelKey, ModelRelation } from '@/core/model/types';

export default function eachRelations<I extends ModelInstance, R>(
  instance: I,
  callback: (def: ModelRelation<ModelKey<I>>) => R,
) {
  return Object.values(instance.$model.$schema).reduce((stack, def) => {
    if (isRelationDef(def)) {
      stack.push(callback(def));
    }

    return stack;
  }, [] as R[]);
}
