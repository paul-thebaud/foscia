import { FunctionTransform } from '@/core/transformers/types';
import { isNone } from '@/utilities';

export default function toBoolean(
  trueValues: unknown[] = [true, 1, '1', 'true', 'yes'],
): FunctionTransform<boolean | null, unknown> {
  return (value: unknown) => (
    isNone(value) ? null : trueValues.indexOf(value) !== -1
  );
}
