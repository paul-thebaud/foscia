/* eslint-disable no-param-reassign */
import mapProps from '@/core/model/props/mapProps';
import cloneModelValue from '@/core/model/snapshots/cloneModelValue';
import markSynced from '@/core/model/snapshots/markSynced';
import {
  ModelAttribute,
  ModelId,
  ModelInstance,
  ModelKey,
  ModelRelation,
  ModelSnapshot,
} from '@/core/model/types';
import { wrapVariadic } from '@/utilities';
import { ArrayableVariadic } from '@/utilities/types';

export default function restoreSnapshot<I extends ModelInstance>(
  instance: I,
  snapshot: ModelSnapshot<I>,
  ...only: ArrayableVariadic<ModelKey<I>>
) {
  const keys = wrapVariadic(...only);

  if (!keys.length) {
    instance.exists = snapshot.exists;
    instance.$raw = snapshot.$raw;
    instance.$loaded = snapshot.$loaded;
  }

  const restoreForDef = <K extends ModelKey<I>>(
    def: ModelId<K> | ModelAttribute<K> | ModelRelation<K>,
  ) => {
    if (keys.length && keys.indexOf(def.key) === -1) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(snapshot.$values, def.key)) {
      instance.$values[def.key] = cloneModelValue(instance.$model, snapshot.$values[def.key]);
    } else {
      delete instance.$values[def.key];
    }
  };

  mapProps(instance, restoreForDef);
  markSynced(instance, ...only);

  return instance;
}
