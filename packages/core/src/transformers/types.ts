import { Awaitable, Optional } from '@foscia/utils';

export type FunctionTransformer<T, S> = (value: S) => Awaitable<T>;

export type ObjectTransformer<T, DS = unknown, SR = unknown> = {
  deserialize: FunctionTransformer<T, DS>;
  serialize: FunctionTransformer<SR, T>;
};

export type ObjectTransformerFactoryOptions<N extends boolean> = {
  nullable?: N;
};

export type ObjectTransformerFactoryResult<T, DS, SR> = <N extends boolean = false>(
  options?: ObjectTransformerFactoryOptions<N>,
) => N extends true
  ? ObjectTransformer<T | null, Optional<DS>, SR | null>
  : ObjectTransformer<T, DS, SR>;
