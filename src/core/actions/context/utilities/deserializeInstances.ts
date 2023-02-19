import consumeDeserializer from '@/core/actions/context/consumers/consumeDeserializer';
import { Action, ConsumeDeserializer } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';
import { DeserializedData } from '@/core/types';

export type DeserializedDataOf<I extends ModelInstance, DD extends DeserializedData> = {
  instances: I[];
} & Omit<DD, 'instances'>;

export default async function deserializeInstances<
  C extends {}, I extends ModelInstance, AD, DD extends DeserializedData,
>(action: Action<C & ConsumeDeserializer<AD, DD>>, data: AD) {
  const context = await action.useContext();

  return consumeDeserializer(context)
    .deserialize(data, context) as Promise<DeserializedDataOf<I, DD>>;
}
