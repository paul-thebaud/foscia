import { Model } from '@/core/model/types';

export default function isModel<M extends Model>(
  value: unknown,
): value is M {
  return !!value && typeof value === 'function' && (value as any).$MODEL_TYPE === 'model';
}
