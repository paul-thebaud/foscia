import logger from '@foscia/core/logger/logger';
import makeTransformer from '@foscia/core/transformers/makeTransformer';
import warnTransformingNil from '@foscia/core/transformers/warnTransformingNil';

export default makeTransformer((value: unknown) => {
  warnTransformingNil('toNumber', value);

  const number = Number(value);
  if (Number.isNaN(number)) {
    logger.warn('Transformer `toNumber` transform resulted in NaN value.', [{ value }]);
  }

  return number;
});
