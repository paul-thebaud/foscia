import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeDeserializer } from '@/core/actions/types';
import { DeserializedData } from '@/core/types';

export default function consumeDeserializer<
  C extends {},
  AD,
  DD extends DeserializedData,
  D = never,
>(
  context: C & Partial<ConsumeDeserializer<AD, DD>>,
  defaultValue?: D,
) {
  return consumeContext(context, 'deserializer', ['context'], defaultValue);
}
