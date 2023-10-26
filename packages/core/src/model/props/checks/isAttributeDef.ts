import { ModelAttribute } from '@foscia/core/model/types';
import { isNil } from '@foscia/utils';

export default function isAttributeDef(
  value: unknown,
): value is ModelAttribute<any> {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'attribute';
}
