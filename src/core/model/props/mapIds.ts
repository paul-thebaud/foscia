import isIdDef from '@/core/model/props/checks/isIdDef';
import mapProps from '@/core/model/props/mapProps';
import { ModelId, ModelInstance, ModelKey } from '@/core/model/types';

export default function mapIds<I extends ModelInstance, R>(
  instance: I,
  callback: (def: ModelId<ModelKey<I>>) => R,
) {
  return mapProps(
    instance,
    callback as any,
    (def) => isIdDef(def),
  ) as R[];
}
