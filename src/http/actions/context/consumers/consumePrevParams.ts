import { consumeContext, FuncClientError } from '@/core';
import { HttpActionContext } from '@/http/types';

export default function consumePrevParams<D = never>(
  context: HttpActionContext,
  defaultValue: D,
) {
  const params = consumeContext(context, 'params', [
    'param',
  ], defaultValue);
  if (typeof params === 'string') {
    throw new FuncClientError('Object and string URL params cannot be merged in action context.');
  }

  return params;
}
