import consumeCache from '@/core/actions/context/consumers/consumeCache';
import consumeId from '@/core/actions/context/consumers/consumeId';
import consumeModel from '@/core/actions/context/consumers/consumeModel';
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
import { Model, ModelInstance } from '@/core/model/types';
import loaded from '@/core/model/utilities/loaded';
import { Awaitable, isNil } from '@/utilities';

export type CachedData<I extends ModelInstance> = {
  instance: I;
};

/**
 * Retrieve an instance from the cache.
 * If the instance is not in cache or if the included relations are not loaded,
 * run the given runner.
 *
 * @param nilRunner
 * @param transform
 *
 * @category Runners
 */
export default function cachedOr<
  C extends {},
  M extends Model,
  I extends InstanceType<M>,
  RD,
  ND = I,
>(
  nilRunner: ContextRunner<C & ConsumeCache & ConsumeModel<M>, Awaitable<RD>>,
  transform?: (data: CachedData<I>) => Awaitable<ND>,
) {
  return async (
    action: Action<C & ConsumeCache & ConsumeModel<M> & ConsumeInclude & ConsumeId>,
  ) => {
    // TODO How could we manage the "forRelation" case?
    const context = await action.useContext();
    const instance = await consumeCache(context)
      .find(consumeModel(context).$type, consumeId(context));
    if (isNil(instance) || !loaded(instance, context.include ?? [])) {
      return action.run(nilRunner);
    }

    return (transform ? transform({ instance }) : instance) as ND;
  };
}

type RunnerExtension = ActionParsedExtension<{
  cachedOr<
    C extends {},
    M extends Model,
    I extends InstanceType<M>,
    RD,
    ND = I,
  >(
    this: Action<C & ConsumeCache & ConsumeModel<M> & ConsumeInclude & ConsumeId>,
    nilRunner: ContextRunner<C & ConsumeCache & ConsumeModel<M>, Awaitable<RD>>,
    transform?: (data: CachedData<I>) => Awaitable<ND>,
  ): Promise<Awaited<ND> | Awaited<RD>>;
}>;

cachedOr.extension = makeRunnersExtension({ cachedOr }) as RunnerExtension;
