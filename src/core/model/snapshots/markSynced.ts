/* eslint-disable no-param-reassign */
import takeSnapshot from '@/core/model/snapshots/takeSnapshot';
import { ModelInstance, ModelKey } from '@/core/model/types';
import { wrapVariadic } from '@/utilities';
import { ArrayableVariadic } from '@/utilities/types';

export default function markSynced<I extends ModelInstance>(
  instance: I,
  ...only: ArrayableVariadic<ModelKey<I>>
) {
  const snapshot = takeSnapshot(instance);
  const keys = wrapVariadic(...only);
  if (keys.length) {
    keys.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(snapshot.$values, key)) {
        instance.$original.$values[key] = snapshot.$values[key];
      } else {
        delete instance.$original.$values[key];
      }
    });
  } else {
    instance.$original = snapshot;
  }

  return instance;
}
