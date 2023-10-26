import isAttributeDef from '@foscia/core/model/props/checks/isAttributeDef';
import isIdDef from '@foscia/core/model/props/checks/isIdDef';
import isRelationDef from '@foscia/core/model/props/checks/isRelationDef';
import { ModelAttribute, ModelId, ModelRelation } from '@foscia/core/model/types';

export default function isPropDef(
  def: unknown,
): def is ModelId<any> | ModelAttribute<any> | ModelRelation<any> {
  return isIdDef(def) || isAttributeDef(def) || isRelationDef(def);
}
