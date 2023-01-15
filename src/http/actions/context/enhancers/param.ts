import { Action, context } from '@/core';
import useContext from '@/core/actions/context/consumers/useContext';
import prevParams from '@/http/actions/context/utilities/prevParams';
import { HttpActionContext } from '@/http/types';
import { Dictionary } from '@/utilities/types';

export default function param(key: string | Dictionary, value?: unknown) {
  return async <C extends HttpActionContext>(action: Action<C>) => action.use(context({
    params: {
      ...prevParams(await useContext(action)),
      ...(typeof key === 'string' ? { [key]: value } : key),
    },
  }));
}
