import oneOr from '@/core/actions/context/runners/oneOr';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import { Action, ActionParsedExtension, ConsumeAdapter, ConsumeDeserializer, ConsumeModel } from '@/core/actions/types';
import { Model } from '@/core/model/types';

/**
 * Run the action and deserialize one model's instance.
 * Returns null when not found or empty result.
 *
 * @category Runners
 */
export default function one<C extends {}, M extends Model, AD>() {
  return oneOr<C, M, AD, null>(() => null);
}

type OneRunnerExtension = ActionParsedExtension<{
  one<C extends {}, M extends Model, AD>(
    this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
  ): Promise<InstanceType<M> | null>;
}>;

one.extension = makeRunnersExtension({ one }) as OneRunnerExtension;
