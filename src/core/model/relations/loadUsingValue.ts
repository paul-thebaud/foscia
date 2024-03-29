import markSynced from '@/core/model/snapshots/markSynced';
import { ModelInstance, ModelRelationKey } from '@/core/model/types';

export default function loadUsingValue<I extends ModelInstance>(
  instance: I,
  relation: ModelRelationKey<I>,
  value: I[ModelRelationKey<I>],
) {
  // eslint-disable-next-line no-param-reassign
  instance[relation] = value;

  markSynced(instance, relation);
}
