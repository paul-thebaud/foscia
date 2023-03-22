import { ModelRelation } from '@/core/model/types';
import { isNil } from '@/utilities';

export default function isRelationDef(
  value: unknown,
): value is ModelRelation {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'relation';
}
