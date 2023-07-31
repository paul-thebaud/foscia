import isRelationDef from '@/core/model/props/checks/isRelationDef';
import mapProps from '@/core/model/props/mapProps';
import { ModelInstance, ModelKey, ModelRelation } from '@/core/model/types';

export default function mapRelations<I extends ModelInstance, R>(
  instance: I,
  callback: (def: ModelRelation<ModelKey<I>>) => R,
) {
  return mapProps(
    instance,
    callback as any,
    (def) => isRelationDef(def),
  ) as R[];
}
