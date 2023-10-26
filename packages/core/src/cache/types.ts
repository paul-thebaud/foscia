import { ModelInstance } from '@foscia/core/model/types';
import { Awaitable } from '@foscia/utils';

export type RefsCacheMode<R> = {
  ref(instance: ModelInstance): Awaitable<R>;
  value(ref: R): Awaitable<ModelInstance | undefined>;
};

export type RefsCacheConfig<R = unknown> = {
  mode?: RefsCacheMode<R>;
};
