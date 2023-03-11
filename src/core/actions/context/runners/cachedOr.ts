import cachedUsing from '@/core/actions/context/runners/cachedUsing';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeCache,
  ConsumeId,
  ConsumeInclude,
  ConsumeModel,
  ContextRunner,
} from '@/core/actions/types';
import { Model } from '@/core/model/types';

/**
 * Retrieve an instance from the cache.
 * If the instance is not in cache or if the included relations are not loaded,
 * run the given runner.
 *
 * @param nilRunner
 *
 * @category Runners
 */
export default function cachedOr<C extends {}, M extends Model, RD>(
  nilRunner: ContextRunner<C & ConsumeCache & ConsumeModel<M>, RD>,
) {
  return async (action: Action<C & ConsumeCache & ConsumeModel<M>>) => (
    await action.run(cachedUsing(({ instance }) => instance)) ?? await action.run(nilRunner)
  );
}

type CachedOrRunnerExtension = ActionParsedExtension<{
  cachedOr<C extends {}, M extends Model, RD>(
    this: Action<C & ConsumeCache & ConsumeModel<M> & ConsumeInclude & ConsumeId>,
    nilRunner: ContextRunner<C & ConsumeCache & ConsumeModel<M>, RD>,
  ): Promise<InstanceType<M> | Awaited<RD>>;
}>;

cachedOr.extension = makeRunnersExtension({ cachedOr }) as CachedOrRunnerExtension;
