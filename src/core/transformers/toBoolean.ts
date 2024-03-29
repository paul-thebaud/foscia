import makeTransformer from '@/core/transformers/makeTransformer';
import { ObjectTransformerFactoryOptions } from '@/core/transformers/types';
import warnTransformingNil from '@/core/transformers/warnTransformingNil';

type ToBooleanOptions = {
  trueValues?: unknown[];
};

const DEFAULT_TRUE_VALUES = [true, 1, '1', 'true', 'yes'];

export default function toBoolean<N extends boolean = false>(
  options?: ToBooleanOptions & ObjectTransformerFactoryOptions<N>,
) {
  return makeTransformer(
    (value: unknown) => {
      warnTransformingNil('toBoolean', value);

      return (options?.trueValues ?? DEFAULT_TRUE_VALUES).indexOf(value) !== -1;
    },
    undefined,
  )(options);
}
