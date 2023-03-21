import isRelationDef from '@/core/model/guards/isRelationDef';
import { ModelInstance, ModelRelation } from '@/core/model/types';

export default function eachRelations<R>(
  instance: ModelInstance,
  callback: (def: ModelRelation) => R,
) {
  return Object.values(instance.$model.$schema).reduce((stack, def) => {
    if (isRelationDef(def)) {
      stack.push(callback(def));
    }

    return stack;
  }, [] as R[]);
}
