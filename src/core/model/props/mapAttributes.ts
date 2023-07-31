import isAttributeDef from '@/core/model/props/checks/isAttributeDef';
import mapProps from '@/core/model/props/mapProps';
import { ModelAttribute, ModelInstance, ModelKey } from '@/core/model/types';

export default function mapAttributes<I extends ModelInstance, R>(
  instance: I,
  callback: (def: ModelAttribute<ModelKey<I>>) => R,
) {
  return mapProps(
    instance,
    callback as any,
    (def) => isAttributeDef(def),
  ) as R[];
}
