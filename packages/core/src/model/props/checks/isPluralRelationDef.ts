import { ModelRelation } from '@foscia/core/model/types';

export default function isPluralRelationDef(def: ModelRelation): boolean {
  return def.$RELATION_TYPE === 'hasMany';
}
