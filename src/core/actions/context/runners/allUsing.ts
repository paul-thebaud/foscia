import Action from '@/core/actions/action';
import raw from '@/core/actions/context/runners/raw';
import deserializeInstances, { DeserializedDataOf } from '@/core/actions/context/utilities/deserializeInstances';
import makeRunnerExtension from '@/core/actions/extensions/makeRunnerExtension';
import {
  ActionContext,
  ActionExtension,
  ConsumeAdapter,
  ConsumeDeserializer,
  ConsumeModel,
} from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';
import { DeserializedData } from '@/core/types';
import { Awaitable } from '@/utilities';

export type AllUsingData<
  AD,
  DD extends DeserializedData,
  I extends ModelInstance,
> = {
  data: AD;
  deserialized: DD;
  instances: I[];
};

export default function allUsing<
  C extends ActionContext,
  M extends Model,
  I extends InstanceType<M>,
  AD,
  DD extends DeserializedData,
  ND,
>(transform: (data: AllUsingData<AD, DeserializedDataOf<I, DD>, I>) => Awaitable<ND>) {
  return async (
    action: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD> & ConsumeModel<M>>,
  ) => {
    const data = await action.run(raw());
    const deserialized = await deserializeInstances<I, AD, DD>(action, data);

    return transform({ data, deserialized, instances: deserialized.instances });
  };
}

type AllUsingRunnerExtension = ActionExtension<'allUsing', <A extends {}, C extends {}, M extends Model, I extends InstanceType<M>, AD, DD extends DeserializedData, ND>(
  this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD> & ConsumeModel<M>> & A,
  transform: (data: AllUsingData<AD, DeserializedDataOf<I, DD>, I>) => Awaitable<ND>,
) => Promise<ND>>;

allUsing.extension = makeRunnerExtension({ allUsing }) as AllUsingRunnerExtension;
