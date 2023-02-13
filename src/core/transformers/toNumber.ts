import { FunctionTransform } from '@/core/transformers/types';
import { isNone } from '@/utilities';

export default function toNumber(): FunctionTransform<number | null, unknown> {
  return (value: unknown) => (
    isNone(value) ? null : Number(value)
  );
}
