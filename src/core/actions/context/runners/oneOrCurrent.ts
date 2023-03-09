import consumeInstance from '@/core/actions/context/consumers/consumeInstance';
import oneOr from '@/core/actions/context/runners/oneOr';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeAdapter,
  ConsumeDeserializer,
  ConsumeInstance,
  ConsumeModel,
} from '@/core/actions/types';
import { Model } from '@/core/model/types';

/**
 * Run the action and deserialize one model's instance.
 * Returns current instance when not found or empty result.
 *
 * @category Runners
 */
export default function oneOrCurrent<
  C extends ConsumeInstance<I>,
  M extends Model,
  I extends InstanceType<M>,
>() {
  return oneOr<C, M, unknown, Promise<I>>(
    async (action) => consumeInstance(await action.useContext()),
  );
}

type OneOrCurrentRunnerExtension = ActionParsedExtension<{
  oneOrCurrent<C extends {}, M extends Model, I extends InstanceType<M>, AD>(
    // eslint-disable-next-line max-len
    this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M> & ConsumeInstance<I>>,
  ): Promise<InstanceType<M>>;
}>;

oneOrCurrent.extension = makeRunnersExtension({ oneOrCurrent }) as OneOrCurrentRunnerExtension;
