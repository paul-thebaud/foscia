import makeTransformer from '@foscia/core/transformers/makeTransformer';
import {
  ObjectTransformer,
  ObjectTransformerFactoryOptions,
} from '@foscia/core/transformers/types';
import warnTransformingNil from '@foscia/core/transformers/warnTransformingNil';
import { Awaitable, Transformer } from '@foscia/utils';

function makeValuesMapper<T, S>(transform: Transformer<S, Awaitable<T>>) {
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
