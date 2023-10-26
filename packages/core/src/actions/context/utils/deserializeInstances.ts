import consumeDeserializer from '@foscia/core/actions/context/consumers/consumeDeserializer';
import { Action, ConsumeDeserializer } from '@foscia/core/actions/types';
import { ModelInstance } from '@foscia/core/model/types';
import { DeserializedData } from '@foscia/core/types';

export type DeserializedDataOf<I extends ModelInstance, DD extends DeserializedData> = {
  instances: I[];
} & Omit<DD, 'instances'>;

export default async function deserializeInstances<
  C extends {}, AD, DD extends DeserializedData,
>(action: Action<C & ConsumeDeserializer<AD, DD>>, data: AD) {
  const context = await action.useContext();

  return consumeDeserializer(context).deserialize(data, context);
}
