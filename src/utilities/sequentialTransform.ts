import { Awaitable } from '@/utilities/types';

export type SequentialTransform<T> = ((value: T) => Awaitable<T>);

function sequentialTransform(transformers: SequentialTransform<void>[]): Promise<void>;
function sequentialTransform<T>(transformers: SequentialTransform<T>[], value: T): Promise<T>;

function sequentialTransform<T>(transformers: SequentialTransform<T>[], value?: T) {
  return transformers.reduce(
    async (prevValue, transformer) => transformer(await prevValue),
    Promise.resolve(value) as Promise<T>,
  );
}

export default sequentialTransform;
