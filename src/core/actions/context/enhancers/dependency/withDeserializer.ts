import context from '@/core/actions/context/enhancers/context';
import { DeserializedData, DeserializerI } from '@/core/types';

export default function withDeserializer<
  AdapterData,
  Data extends DeserializedData,
  Deserializer extends DeserializerI<AdapterData, Data>,
>(deserializer: Deserializer) {
  return context({ deserializer });
}
