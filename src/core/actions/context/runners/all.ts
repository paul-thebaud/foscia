import raw from '@/core/actions/context/runners/raw';
import deserializeInstances, {
  DeserializedDataOf,
} from '@/core/actions/context/utilities/deserializeInstances';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeAdapter,
  ConsumeDeserializer,
  InferConsumedInstance,
} from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';
import { DeserializedData } from '@/core/types';
import { Awaitable } from '@/utilities';

export type AllData<
  AD,
  DD extends DeserializedData,
  I extends ModelInstance,
> = {
  data: AD;
  deserialized: DD;
  instances: I[];
};

/**
 * Run the action and deserialize an array of model's instance.
 *
 * @param transform
 *
 * @category Runners
 */
export default function all<
  C extends {},
  I extends InferConsumedInstance<C>,
  AD,
  DD extends DeserializedData,
  ND = I[],
>(transform?: (data: AllData<AD, DeserializedDataOf<I, DD>, I>) => Awaitable<ND>) {
  return async (
    action: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD>>,
  ) => action.run(raw(async (data) => {
    const deserialized = await deserializeInstances(
      action,
      data,
    ) as unknown as DeserializedDataOf<I, DD>;

    return (
      transform
        ? transform({ data, deserialized, instances: deserialized.instances })
        : deserialized.instances
    ) as Awaitable<ND>;
  }));
}

type RunnerExtension = ActionParsedExtension<{
  all<
    C extends {},
    I extends InferConsumedInstance<C>,
    AD,
    DD extends DeserializedData,
    ND = I[],
  >(
    this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD>>,
    transform?: (data: AllData<AD, DeserializedDataOf<I, DD>, I>) => Awaitable<ND>,
  ): Promise<Awaited<ND>>;
}>;

all.extension = makeRunnersExtension({ all }) as RunnerExtension;
