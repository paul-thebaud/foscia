import compareModelValue from '@/core/model/snapshots/compareModelValue';
import { ModelClass, ModelKey, ModelSnapshot } from '@/core/model/types';
import { wrapVariadic } from '@/utilities';
import { ArrayableVariadic } from '@/utilities/types';

export default function compareSnapshots<M extends ModelClass>(
  model: M,
  nextSnapshot: ModelSnapshot<M>,
  prevSnapshot: ModelSnapshot<M>,
  ...only: ArrayableVariadic<ModelKey<M>>
) {
  const keys = wrapVariadic(...only);
  if (!keys.length && nextSnapshot.exists !== prevSnapshot.exists) {
    return false;
  }

  return (
    keys.length > 0
    || Object.keys(nextSnapshot.$values).length === Object.keys(prevSnapshot.$values).length
  ) && (keys.length ? keys : Object.keys(nextSnapshot.$values)).every(
    (key) => compareModelValue(
      model,
      nextSnapshot.$values[key],
      prevSnapshot.$values[key],
    ),
  );
}
