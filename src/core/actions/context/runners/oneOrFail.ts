import oneOr from '@/core/actions/context/runners/oneOr';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import { Action, ActionParsedExtension, ConsumeAdapter, ConsumeDeserializer, ConsumeModel } from '@/core/actions/types';
import ExpectedRunFailureError from '@/core/errors/expectedRunFailureError';
import { Model } from '@/core/model/types';

/**
 * Run the action and deserialize one model's instance.
 * Throw an "ExpectedRunFailureError" when not found or empty result.
 *
 * @category Runners
 */
export default function oneOrFail<C extends {}, M extends Model, AD>() {
  return oneOr<C, M, AD, never>(() => {
    throw new ExpectedRunFailureError(
      '`oneOrFail` failed. You may handle this error globally as a "not found" record error.',
    );
  });
}

type OneOrFailRunnerExtension = ActionParsedExtension<{
  oneOrFail<C extends {}, M extends Model, AD>(
    this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
  ): Promise<InstanceType<M>>;
}>;

oneOrFail.extension = makeRunnersExtension({ oneOrFail }) as OneOrFailRunnerExtension;
