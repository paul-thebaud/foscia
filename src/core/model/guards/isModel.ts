import { Model } from '@/core/model/types';
import { isNil } from '@/utilities';

export default function isModel<M extends Model>(
  value: unknown,
): value is M {
  return !isNil(value) && typeof value === 'function' && (value as any).$MODEL_TYPE === 'model';
}
