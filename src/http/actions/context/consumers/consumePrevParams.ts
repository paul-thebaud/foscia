import { consumeContext, FuncClientError } from '@/core';
import { CONSUME_DEFAULT } from '@/core/actions/context/consumers/consumeContext';
import { HttpActionContext } from '@/http/types';

export default function consumePrevParams<D = never>(
  context: HttpActionContext,
  defaultValue: D = CONSUME_DEFAULT,
) {
  const params = consumeContext(context, 'params', [
    'param',
  ], defaultValue);
  if (typeof params === 'string') {
    throw new FuncClientError('Object and string URL params cannot be merged in action context.');
  }

  return params;
}
