import { MapRegistry, MapRegistryConfig } from '@foscia/core';

/**
 * Make a default registry implementation.
 */
export default function makeRegistry(config?: MapRegistryConfig) {
  return new MapRegistry(config);
}
