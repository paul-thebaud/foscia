import type { ActionFactory } from '@/core';
import type ActionFactoryMock from '@/test/actionFactoryMock';
import type { ActionMockableFactory } from '@/test/types';

/**
 * Creates a proxy of an action factory which can be mocked.
 *
 * @param factory
 */
export default function makeActionFactoryMockable<A extends any[], C extends {}, E extends {}>(
  factory: ActionFactory<A, C, E>,
): ActionMockableFactory<A, C, E> {
  const mockableFactory = (...args: A) => (
    mockableFactory.$mock
      ? mockableFactory.$mock.makeAction(...args)
      : mockableFactory.$real(...args)
  );

  mockableFactory.$mock = null as ActionFactoryMock<A, C, E> | null;
  mockableFactory.$real = factory;

  return mockableFactory;
}
