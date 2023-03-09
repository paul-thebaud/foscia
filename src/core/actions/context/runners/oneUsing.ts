import consumeAdapter from '@/core/actions/context/consumers/consumeAdapter';
import allUsing, { AllUsingData } from '@/core/actions/context/runners/allUsing';
import { DeserializedDataOf } from '@/core/actions/context/utilities/deserializeInstances';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import { Action, ActionParsedExtension, ConsumeAdapter, ConsumeDeserializer, ConsumeModel } from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';
import { DeserializedData } from '@/core/types';
import { Awaitable } from '@/utilities';

export type OneUsingData<
  AD,
  DD extends DeserializedData,
  I extends ModelInstance,
> = AllUsingData<AD, DD, I> & {
  instance: I;
};

/**
 * Run the action and deserialize one model's instance.
 * Handle the not found instance as null result.
 * Transform the returned result using given callback.
 *
 * @param transform
 *
 * @category Runners
 */
export default function oneUsing<
  C extends {},
  M extends Model,
  I extends InstanceType<M>,
  AD,
  DD extends DeserializedData,
  ND,
>(transform: (data: OneUsingData<AD, DeserializedDataOf<I, DD>, I>) => Awaitable<ND>) {
  return async (
    action: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD> & ConsumeModel<M>>,
  ) => {
    try {
      return await action.run(allUsing((data) => {
        const instance = data.instances[0];
        if (instance) {
          return transform({
            ...data,
            instance,
          });
        }

        return null;
      }));
    } catch (error) {
      const context = await action.useContext();
      if (await consumeAdapter(context).isNotFound(error)) {
        return null;
      }

      throw error;
    }
  };
}

type OneUsingRunnerExtension = ActionParsedExtension<{
  oneUsing<
    C extends {},
    M extends Model,
    I extends InstanceType<M>,
    AD,
    DD extends DeserializedData,
    ND,
  >(
    this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD> & ConsumeModel<M>>,
    transform: (data: OneUsingData<AD, DeserializedDataOf<I, DD>, I>) => Awaitable<ND>,
  ): Promise<Awaited<ND>>;
}>;

oneUsing.extension = makeRunnersExtension({ oneUsing }) as OneUsingRunnerExtension;
