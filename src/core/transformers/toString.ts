import { FunctionTransform } from '@/core/transformers/types';
import { isNone } from '@/utilities';

export default function toString(): FunctionTransform<string | null, unknown> {
  return (value: unknown) => (
    isNone(value) ? null : String(value)
  );
}
