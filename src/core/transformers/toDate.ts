import logger from '@/core/logger/logger';
import makeTransformer from '@/core/transformers/makeTransformer';
import warnTransformingNil from '@/core/transformers/warnTransformingNil';

function dateFromUnix(unix: number): Date {
  const date = new Date();

  date.setTime(unix);

  return date;
}

export default makeTransformer(
  (value: unknown) => {
    warnTransformingNil('toDate', value);

    const date = dateFromUnix(typeof value === 'string' ? Date.parse(value) : Number.NaN);
    if (Number.isNaN(date.getTime())) {
      logger.warn('Transformer `toDate` transform resulted in NaN date value.', [{ value }]);
    }

    return date;
  },
  (value: Date) => {
    warnTransformingNil('toDate', value);

    return value.toISOString();
  },
);
