import cachedOr, { CachedData } from '@/core/actions/context/runners/cachedOr';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeCache,
  ConsumeId,
  ConsumeInclude,
  ConsumeModel,
} from '@/core/actions/types';
import { Model } from '@/core/model/types';
import { Awaitable } from '@/utilities';

/**
 * Retrieve an instance from the cache.
 * If the instance is not in cache or if the included relations are not loaded,
 * returns null.
 *
 * @category Runners
 */
export default function cached<
  C extends {},
  M extends Model,
  I extends InstanceType<M>,
  ND = I,
>(transform?: (data: CachedData<I>) => Awaitable<ND>) {
  return cachedOr<C, M, I, null, ND>(() => null, transform);
}

type RunnerExtension = ActionParsedExtension<{
  cached<
    C extends {},
    M extends Model,
    I extends InstanceType<M>,
    ND = I,
  >(
    this: Action<C & ConsumeCache & ConsumeModel<M> & ConsumeInclude & ConsumeId>,
    transform?: (data: CachedData<I>) => Awaitable<ND>,
  ): Promise<ND | null>;
}>;

cached.extension = makeRunnersExtension({ cached }) as RunnerExtension;
