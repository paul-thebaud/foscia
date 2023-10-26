import { ModelInstance } from '@foscia/core/model/types';
import { isNil } from '@foscia/utils';

export default function isInstance<I extends ModelInstance = ModelInstance>(
  value: unknown,
): value is I {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'instance';
}
