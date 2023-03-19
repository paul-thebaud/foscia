import { consumeContext, FosciaError } from '@/core';
import { HttpRequestConfig } from '@/http/types';

export default function consumePrevParams<D = never>(
  context: HttpRequestConfig,
  defaultValue?: D,
) {
  const params = consumeContext(context, 'params', [
    'param',
  ], defaultValue);
  if (typeof params === 'string') {
    throw new FosciaError('Object and string URL params cannot be merged in action context.');
  }

  return params;
}
