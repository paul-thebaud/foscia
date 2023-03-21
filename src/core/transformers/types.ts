import { Awaitable } from '@/utilities';

export type FunctionTransform<T, S> = (value: S) => Awaitable<T>;

export type ObjectTransform<T, S> = {
  serialize(value: T): Awaitable<S>;
  deserialize(value: S): Awaitable<T>;
};

export type Transform<T, S = unknown> =
  | FunctionTransform<T, S>
  | ObjectTransform<T, S>;
