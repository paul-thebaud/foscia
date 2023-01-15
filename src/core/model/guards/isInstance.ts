import { ModelInstance } from '@/core/model/types';
import { isNil } from '@/utilities';

export default function isInstance<I extends ModelInstance = ModelInstance>(
  value: unknown,
): value is I {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'instance';
}
