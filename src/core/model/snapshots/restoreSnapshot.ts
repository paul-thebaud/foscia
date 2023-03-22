/* eslint-disable no-param-reassign */
import eachProps from '@/core/model/props/eachProps';
import { ModelInstance, ModelKey, ModelSnapshot } from '@/core/model/types';
import cloneModelValue from '@/core/model/snapshots/cloneModelValue';
import { wrapVariadic } from '@/utilities';
import { ArrayableVariadic } from '@/utilities/types';

export default function restoreSnapshot<I extends ModelInstance>(
  instance: I,
  snapshot: ModelSnapshot<I>,
  ...only: ArrayableVariadic<ModelKey<I>>
) {
  const keys = wrapVariadic(...only);

  if (!keys.length) {
    instance.id = snapshot.id!;
    instance.lid = snapshot.lid;
    instance.exists = snapshot.exists;
    instance.$raw = snapshot.$raw;
    instance.$loaded = snapshot.$loaded;
  }

  eachProps(instance, (def) => {
    if (keys.length && keys.indexOf(def.key) === -1) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(snapshot.$values, def.key)) {
      instance.$values[def.key] = cloneModelValue(instance.$model, snapshot.$values[def.key]);
    } else {
      delete instance.$values[def.key];
    }
  });

  return instance;
}
