import makeTransformer from '@foscia/core/transformers/makeTransformer';
import warnTransformingNil from '@foscia/core/transformers/warnTransformingNil';

export default makeTransformer((value: unknown) => {
  warnTransformingNil('toString', value);

  return String(value);
});
