import isPluralRelationDef from '@/core/model/props/checks/isPluralRelationDef';
import { ModelRelation } from '@/core/model/types';
import { pluralize } from '@/utilities';

export default function guessRelationType(def: ModelRelation) {
  return isPluralRelationDef(def) ? def.key : pluralize(def.key);
}
