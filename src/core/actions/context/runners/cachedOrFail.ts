import cachedOr from '@/core/actions/context/runners/cachedOr';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  Action,
  ActionContext,
  ActionParsedExtension,
  ConsumeCache,
  ConsumeId,
  ConsumeInclude,
  ConsumeModel,
} from '@/core/actions/types';
import ExpectedRunFailureError from '@/core/errors/expectedRunFailureError';
import { Model } from '@/core/model/types';

/**
 * Retrieve an instance from the cache.
 * If the instance is not in cache or if the included relations are not loaded,
 * throws an "ExpectedRunFailureError".
 *
 * @category Runners
 */
export default function cachedOrFail<M extends Model>() {
  return cachedOr<ActionContext, M, never>(() => {
    throw new ExpectedRunFailureError(
      '`cachedOrFail` failed. You may handle this error globally as a "not found" record error.',
    );
  });
}

type CachedOrFailRunnerExtension = ActionParsedExtension<{
  cachedOrFail<C extends {}, M extends Model>(
    this: Action<C & ConsumeCache & ConsumeModel<M> & ConsumeInclude & ConsumeId>,
  ): Promise<InstanceType<M>>;
}>;

cachedOrFail.extension = makeRunnersExtension({ cachedOrFail }) as CachedOrFailRunnerExtension;
