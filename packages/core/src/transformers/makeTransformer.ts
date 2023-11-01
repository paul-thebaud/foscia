import {
  ObjectTransformerFactoryOptions,
  ObjectTransformerFactoryResult,
} from '@foscia/core/transformers/types';
import { Awaitable, isNil, Optional } from '@foscia/shared';

export default function makeTransformer<T, DS, SR>(
  deserializeFn: (value: DS) => Awaitable<T>,
  serializeFn?: (value: T) => Awaitable<SR>,
): ObjectTransformerFactoryResult<T, DS, SR> {
  return <N extends boolean = false>(options?: ObjectTransformerFactoryOptions<N>) => {
    const deserialize = deserializeFn;
    const serialize = serializeFn ?? deserializeFn;

    if (options?.nullable) {
      return {
        deserialize: (value: Optional<DS>) => (isNil(value) ? null : deserialize(value)),
        serialize: (value: T | null) => (isNil(value) ? null : serialize(value as any)),
      } as any;
    }

    return { deserialize, serialize } as any;
  };
}
