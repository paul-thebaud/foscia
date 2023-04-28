import { Action, ActionParsedExtension, ContextEnhancer, makeEnhancersExtension } from '@/core';
import { param } from '@/http';
import consumePrevParams from '@/http/actions/context/consumers/consumePrevParams';
import { Arrayable, Dictionary, optionalJoin, uniqueValues, wrap } from '@/utilities';

/**
 * Sort direction to apply.
 */
type SortDirection = 'asc' | 'desc';

/**
 * Resolve the keys and directions arrays from given sort parameters.
 *
 * @param keys
 * @param directions
 */
function resolveKeysDirections(
  keys: Arrayable<string> | Dictionary<SortDirection>,
  directions: Arrayable<SortDirection> = 'asc',
): [string[], SortDirection[]] {
  if (typeof keys === 'object' && !Array.isArray(keys)) {
    return [Object.keys(keys), Object.values(keys)];
  }

  return [wrap(keys), wrap(directions)];
}

/**
 * Convert a key to a sorted key usable by a JSON:API.
 *
 * @param key
 * @param direction
 */
function serializeSort(key: string, direction: SortDirection) {
  return `${direction === 'desc' ? '-' : ''}${key}`;
}

function sortBy<C extends {}, E extends {}>(
  keys: Dictionary<SortDirection>,
): ContextEnhancer<C, E, C>;
function sortBy<C extends {}, E extends {}>(
  keys: Arrayable<string>,
  directions?: Arrayable<SortDirection>,
): ContextEnhancer<C, E, C>;

/**
 * [Sort the JSON:API resource](https://jsonapi.org/format/#fetching-sorting)
 * by the given keys and directions.
 * The new sort will be merged with the previous ones.
 * Sorts priority are kept.
 *
 * @param keys
 * @param directions
 *
 * @category Enhancers
 */
function sortBy(
  keys: Arrayable<string> | Dictionary<SortDirection>,
  directions: Arrayable<SortDirection> = 'asc',
) {
  return async <C extends {}>(action: Action<C>) => {
    const [newKeys, newDirections] = resolveKeysDirections(keys, directions);

    return action.use(param(
      'sort',
      optionalJoin(uniqueValues([
        consumePrevParams(await action.useContext(), null)?.sort,
        ...newKeys.map((k, i) => serializeSort(k, newDirections[i] ?? newDirections[0])),
      ]), ','),
    ));
  };
}

type SortByEnhancerExtension = ActionParsedExtension<{
  sortBy<C extends {}, E extends {}>(
    this: Action<C, E>,
    keys: Arrayable<string>,
    direction?: 'asc' | 'desc',
  ): Action<C, E>;
}>;

sortBy.extension = makeEnhancersExtension({ sortBy }) as SortByEnhancerExtension;

export default sortBy;
