import rawUsing from '@/core/actions/context/runners/rawUsing';
import deserializeInstances, { DeserializedDataOf } from '@/core/actions/context/utilities/deserializeInstances';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  ActionContext,
  Action,
  ActionParsedExtension,
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
  ) => action.run(rawUsing(async (data) => {
    const deserialized = await deserializeInstances(action, data) as DeserializedDataOf<I, DD>;

    return transform({ data, deserialized, instances: deserialized.instances });
  }));
}

type AllUsingRunnerExtension = ActionParsedExtension<{
  allUsing<
    C extends {},
    M extends Model,
    I extends InstanceType<M>,
    AD,
    DD extends DeserializedData,
    ND,
  >(
    this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD> & ConsumeModel<M>>,
    transform: (data: AllUsingData<AD, DeserializedDataOf<I, DD>, I>) => Awaitable<ND>,
  ): Promise<ND>;
}>;

allUsing.extension = makeRunnersExtension({ allUsing }) as AllUsingRunnerExtension;
