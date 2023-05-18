import { ModelId } from '@/core/model/types';
import { isNil } from '@/utilities';

export default function isIdDef(
  value: unknown,
): value is ModelId<'id' | 'lid'> {
  return !isNil(value)
    && typeof value === 'object'
    && ((value as any).$MODEL_TYPE === 'id' || (value as any).$MODEL_TYPE === 'lid');
}
