import { Action, ActionContext } from '@/core';
import useContext from '@/core/actions/context/consumers/useContext';
import { param } from '@/http';
import prevParams from '@/http/actions/context/utilities/prevParams';
import { Dictionary } from '@/utilities';

/**
 * [Filter the JSON:API resource](https://jsonapi.org/format/#fetching-filtering)
 * by the given key and value.
 * When key is an object, it will spread the object as a filter values map.
 * The new filter will be merged with the previous ones.
 *
 * @param key
 * @param value
 *
 * @category Enhancers
 */
export default function filterBy(key: string | Dictionary, value?: unknown) {
  return async <C extends ActionContext>(action: Action<C>) => action.use(param('filter', {
    ...prevParams(await useContext(action))?.filter,
    ...(typeof key === 'string' ? { [key]: value } : key),
  }));
}
