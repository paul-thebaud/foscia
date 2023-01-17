import useRequiredContext from '@/core/actions/context/consumers/useRequiredContext';
import { ConsumableContext, ConsumeDeserializer } from '@/core/actions/types';
import { DeserializedData } from '@/core/types';

export default async function useDeserializerContext<C extends {}, AD, DD extends DeserializedData>(
  actionOrContext: ConsumableContext<C & ConsumeDeserializer<AD, DD>>,
) {
  return useRequiredContext(actionOrContext, 'deserializer', ['withDeserializer']);
}
