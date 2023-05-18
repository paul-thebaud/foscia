import isAttributeDef from '@/core/model/props/checks/isAttributeDef';
import isIdDef from '@/core/model/props/checks/isIdDef';
import isRelationDef from '@/core/model/props/checks/isRelationDef';
import { ModelAttribute, ModelId, ModelRelation } from '@/core/model/types';

export default function isPropDef(
  def: unknown,
): def is ModelId | ModelAttribute | ModelRelation {
  return isIdDef(def) || isAttributeDef(def) || isRelationDef(def);
}
