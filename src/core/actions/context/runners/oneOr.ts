import oneUsing from '@/core/actions/context/runners/oneUsing';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeAdapter,
  ConsumeDeserializer,
  ConsumeModel,
  ContextRunner,
} from '@/core/actions/types';
import { Model } from '@/core/model/types';

type NilRunner<C extends {}, M extends Model, AD, RD> =
  ContextRunner<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>, RD>;

/**
 * Run the action and deserialize one model's instance.
 * Run the given runner when not found or empty result.
 *
 * @param nilRunner
 *
 * @category Runners
 */
export default function oneOr<C extends {}, M extends Model, AD, RD>(
  nilRunner: NilRunner<C, M, AD, RD>,
) {
  return async (
    action: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
  ) => (
    await action.run(oneUsing(({ instance }) => instance)) ?? await action.run(nilRunner)
  );
}

type OneOrRunnerExtension = ActionParsedExtension<{
  oneOr<C extends {}, M extends Model, AD, RD>(
    this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
    nilRunner: NilRunner<C, M, AD, RD>,
  ): Promise<InstanceType<M> | Awaited<RD>>;
}>;

oneOr.extension = makeRunnersExtension({ oneOr }) as OneOrRunnerExtension;
