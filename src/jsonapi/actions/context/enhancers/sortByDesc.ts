import { Action, ActionParsedExtension, makeEnhancersExtension } from '@/core';
import sortBy from '@/jsonapi/actions/context/enhancers/sortBy';

/**
 * Shortcut for the {@link sortBy} function with a desc direction.
 *
 * @param key
 *
 * @category Enhancers
 */
export default function sortByDesc(key: string | string[]) {
  return sortBy(key, 'desc');
}

type SortByDescEnhancerExtension = ActionParsedExtension<{
  sortByDesc<C extends {}, E extends {}>(
    this: Action<C, E>,
    key: string | string[],
  ): Action<C, E>;
}>;

sortByDesc.extension = makeEnhancersExtension({ sortByDesc }) as SortByDescEnhancerExtension;
