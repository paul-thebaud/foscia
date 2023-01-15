import { Action } from '@/core';
import useContext from '@/core/actions/context/consumers/useContext';
import params from '@/http/actions/context/enhancers/params';
import prevParams from '@/http/actions/context/utilities/prevParams';
import { HttpActionContext } from '@/http/types';

export default function param(key: string, value: unknown) {
  return async <C extends HttpActionContext>(action: Action<C>) => action.use(params({
    ...prevParams(await useContext(action)),
    [key]: value,
  }));
}
