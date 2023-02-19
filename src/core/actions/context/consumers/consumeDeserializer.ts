import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeDeserializer } from '@/core/actions/types';
import { DeserializedData } from '@/core/types';

export default function consumeDeserializer<AD, DD extends DeserializedData, D = never>(
  context: Partial<ConsumeDeserializer<AD, DD>>,
  defaultValue?: D,
) {
  return consumeContext(context, 'deserializer', ['context'], defaultValue);
}
