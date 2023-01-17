import useRequiredContext from '@/core/actions/context/consumers/useRequiredContext';
import { ConsumableContext, ConsumeSerializer } from '@/core/actions/types';

export default async function useSerializerContext<C extends {}, SD>(
  actionOrContext: ConsumableContext<C & ConsumeSerializer<SD>>,
) {
  return useRequiredContext(actionOrContext, 'serializer', ['withSerializer']);
}
