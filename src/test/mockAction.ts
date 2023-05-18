import ActionFactoryMock from '@/test/actionFactoryMock';
import { ActionMockableFactory } from '@/test/types';

/**
 * Starts mocking a mockable action factory.
 *
 * @param factory
 */
export default function mockAction<A extends any[], C extends {}, E extends {}>(
  factory: ActionMockableFactory<A, C, E>,
) {
  // eslint-disable-next-line no-param-reassign
  factory.$mock = new ActionFactoryMock(factory.$real);

  return factory.$mock;
}
