import makeTransformer from '@/core/transformers/makeTransformer';
import {
  FunctionTransformer,
  ObjectTransformer,
  ObjectTransformerFactoryOptions,
} from '@/core/transformers/types';
import warnTransformingNil from '@/core/transformers/warnTransformingNil';

function makeValuesMapper<T, S>(transform: FunctionTransformer<T, S>) {
  return (value: S[]) => {
    warnTransformingNil('toArrayOf', value);

    return Promise.all(
      value.map((v) => transform(v)),
    );
  };
}

export default function toArrayOf<T, DS, SR, N extends boolean = false>(
  transformer: ObjectTransformer<T, DS, SR>,
  options?: ObjectTransformerFactoryOptions<N>,
) {
  return makeTransformer(
    makeValuesMapper(transformer.deserialize),
    makeValuesMapper(transformer.serialize),
  )(options);
}
