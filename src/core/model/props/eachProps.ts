import { ModelAttribute, ModelInstance, ModelRelation } from '@/core/model/types';

export default function eachProps<R>(
  instance: ModelInstance,
  callback: (def: ModelAttribute | ModelRelation) => R,
) {
  return Object.values(instance.$model.$schema).map(callback);
}
