import { RefsCache, RefsCacheConfig } from '@foscia/core';

/**
 * Make a default cache implementation.
 *
 * @param config
 */
export default function makeCache(config?: RefsCacheConfig) {
  return new RefsCache(config);
}
