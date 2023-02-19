import { Action, context } from '@/core';
import consumePrevParams from '@/http/actions/context/consumers/consumePrevParams';
import { Dictionary } from '@/utilities';

export default function param(key: string | Dictionary, value?: unknown) {
  return async <C extends {}>(action: Action<C>) => action.use(context({
    params: {
      ...consumePrevParams(await action.useContext(), null),
      ...(typeof key === 'string' ? { [key]: value } : key),
    },
  }));
}
