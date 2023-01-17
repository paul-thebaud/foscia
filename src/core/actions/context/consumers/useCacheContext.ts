import useRequiredContext from '@/core/actions/context/consumers/useRequiredContext';
import { ConsumableContext, ConsumeCache } from '@/core/actions/types';

export default async function useCacheContext<C extends {}>(
  actionOrContext: ConsumableContext<C & ConsumeCache>,
) {
  return useRequiredContext(actionOrContext, 'cache', ['withCache']);
}
