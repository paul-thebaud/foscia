import restoreSnapshot from '@/core/model/snapshots/restoreSnapshot';
import { ModelInstance, ModelKey } from '@/core/model/types';
import { ArrayableVariadic } from '@/utilities/types';

export default function restore<I extends ModelInstance>(
  instance: I,
  ...only: ArrayableVariadic<ModelKey<I>>
) {
  restoreSnapshot(instance, instance.$original, ...only);

  return instance;
}
