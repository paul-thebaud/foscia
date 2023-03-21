import { MapRegistry, MapRegistryConfig } from '@/core';

/**
 * Make a default registry implementation.
 */
export default function makeRegistry(config?: MapRegistryConfig) {
  return new MapRegistry(config);
}
