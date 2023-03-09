import cachedOr from '@/core/actions/context/runners/cachedOr';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeCache,
  ConsumeId,
  ConsumeInclude,
  ConsumeModel,
  ConsumeType,
} from '@/core/actions/types';
import { Model } from '@/core/model/types';

/**
 * Retrieve an instance from the cache.
 * If the instance is not in cache or if the included relations are not loaded,
 * returns null.
 *
 * @category Runners
 */
export default function cached<C extends {}, M extends Model>() {
  return cachedOr<C, M, null>(() => null);
}

type CachedRunnerExtension = ActionParsedExtension<{
  cached<C extends {}, M extends Model>(
    this: Action<C & ConsumeCache & ConsumeModel<M> & ConsumeInclude & ConsumeType & ConsumeId>,
  ): Promise<InstanceType<M> | null>;
}>;

cached.extension = makeRunnersExtension({ cached }) as CachedRunnerExtension;
