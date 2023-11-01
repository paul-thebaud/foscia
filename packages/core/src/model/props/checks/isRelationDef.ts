import { ModelRelation } from '@foscia/core/model/types';
import { isNil } from '@foscia/shared';

export default function isRelationDef(
  value: unknown,
): value is ModelRelation<any> {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'relation';
}
