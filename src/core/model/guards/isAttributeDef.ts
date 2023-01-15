import { ModelAttribute } from '@/core/model/types';
import { isNil } from '@/utilities';

export default function isAttributeDef(
  value: unknown,
): value is ModelAttribute {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'attribute';
}
