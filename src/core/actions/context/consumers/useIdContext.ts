import useRequiredContext from '@/core/actions/context/consumers/useRequiredContext';
import { ConsumableContext, ConsumeId } from '@/core/actions/types';

export default async function useIdContext<C extends {}>(
  actionOrContext: ConsumableContext<C & ConsumeId>,
) {
  return useRequiredContext(actionOrContext, 'id', [
    'find',
    'update',
    'destroy',
    'instance',
    'forId',
  ]);
}
