import isAttributeDef from '@/core/model/props/checks/isAttributeDef';
import isRelationDef from '@/core/model/props/checks/isRelationDef';
import { ModelAttribute, ModelRelation } from '@/core/model/types';

export default function isPropDef(
  def: unknown,
): def is ModelAttribute | ModelRelation {
  return isAttributeDef(def) || isRelationDef(def);
}
