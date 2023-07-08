import compareSnapshots from '@/core/model/snapshots/compareSnapshots';
import takeSnapshot from '@/core/model/snapshots/takeSnapshot';
import { ModelInstance, ModelKey } from '@/core/model/types';
import { ArrayableVariadic } from '@/utilities/types';

export default function changed<I extends ModelInstance>(
  instance: I,
  ...only: ArrayableVariadic<ModelKey<I>>
) {
  return !compareSnapshots(
    takeSnapshot(instance),
    instance.$original,
    ...only,
  );
}
