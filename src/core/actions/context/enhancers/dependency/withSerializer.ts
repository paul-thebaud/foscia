import context from '@/core/actions/context/enhancers/context';
import { SerializerI } from '@/core/types';

export default function withSerializer<
  Data,
  Serializer extends SerializerI<Data>,
>(serializer: Serializer) {
  return context({ serializer });
}
