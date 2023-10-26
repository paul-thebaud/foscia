import { Model, ModelClass } from '@foscia/core/model/types';
import { isNil } from '@foscia/utils';

export default function isModel<M extends ModelClass | Model>(
  value: unknown,
): value is M {
  return !isNil(value) && typeof value === 'function' && (value as any).$MODEL_TYPE === 'model';
}
