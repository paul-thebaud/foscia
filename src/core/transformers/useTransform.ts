import { ObjectTransform, Transform } from '@/core/transformers/types';

export default function useTransform(
  transformer: Transform<unknown> | undefined,
  action: keyof ObjectTransform<unknown, unknown>,
) {
  if (!transformer) {
    return (value: unknown) => value;
  }

  if (typeof transformer === 'function') {
    return transformer;
  }

  return transformer[action];
}
