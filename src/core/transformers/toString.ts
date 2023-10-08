import makeTransformer from '@/core/transformers/makeTransformer';
import warnTransformingNil from '@/core/transformers/warnTransformingNil';

export default makeTransformer((value: unknown) => {
  warnTransformingNil('toString', value);

  return String(value);
});
