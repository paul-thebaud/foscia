import { ModelInstance } from '@foscia/core/model/types';
import { Awaitable } from '@foscia/utils';

export type RefManager<R> = {
  ref(instance: ModelInstance): Awaitable<R>;
  value(ref: R): Awaitable<ModelInstance | undefined>;
};

export type RefsCacheConfig<R = unknown> = {
  manager?: RefManager<R>;
};
