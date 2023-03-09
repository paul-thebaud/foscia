import { Action, ActionParsedExtension, makeEnhancersExtension } from '@/core';
import { param } from '@/http';
import consumePrevParams from '@/http/actions/context/consumers/consumePrevParams';
import mergeParamList from '@/jsonapi/actions/context/utilities/mergeParamList';
import { wrap } from '@/utilities';

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
export default function sortBy(key: string | string[], direction: 'asc' | 'desc' = 'asc') {
  return async <C extends {}>(action: Action<C>) => action.use(param(
    'sort',
    mergeParamList([
      consumePrevParams(await action.useContext(), null)?.sort,
      ...wrap(key).map((k) => `${direction === 'desc' ? '-' : ''}${k}`),
    ]),
  ));
}

type SortByEnhancerExtension = ActionParsedExtension<{
  sortBy<C extends {}, E extends {}>(
    this: Action<C, E>,
    key: string | string[],
    direction?: 'asc' | 'desc',
  ): Action<C, E>;
}>;

sortBy.extension = makeEnhancersExtension({ sortBy }) as SortByEnhancerExtension;
