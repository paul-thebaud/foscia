import consumeAdapter from '@/core/actions/context/consumers/consumeAdapter';
import allUsing, { AllUsingData } from '@/core/actions/context/runners/allUsing';
import { DeserializedDataOf } from '@/core/actions/context/utilities/deserializeInstances';
import { Action, ConsumeAdapter, ConsumeDeserializer, ConsumeModel } from '@/core/actions/types';
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
