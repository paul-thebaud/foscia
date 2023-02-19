import { Action } from '@/core';
import { param } from '@/http';
import consumePrevParams from '@/http/actions/context/consumers/consumePrevParams';
import mergeParamList from '@/jsonapi/actions/context/utilities/mergeParamList';

/**
 * [Sort the JSON:API resource](https://jsonapi.org/format/#fetching-sorting)
 * by the given key and direction.
 * The new sort will be merged with the previous ones.
 * Sorts priority are kept.
 *
 * @param key
 * @param direction
 *
 * @category Enhancers
 */
export default function sortBy(key: string, direction: 'asc' | 'desc' = 'asc') {
  return async <C extends {}>(action: Action<C>) => action.use(param(
    'sort',
    mergeParamList([
      consumePrevParams(await action.useContext(), null)?.sort,
      `${direction === 'desc' ? '-' : ''}${key}`,
    ]),
  ));
}
