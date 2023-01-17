import useRequiredContext from '@/core/actions/context/consumers/useRequiredContext';
import { ConsumableContext, ConsumeType } from '@/core/actions/types';

export default async function useTypeContext<C extends {}>(
  actionOrContext: ConsumableContext<C & ConsumeType>,
) {
  return useRequiredContext(actionOrContext, 'type', [
    'model',
    'find',
    'update',
    'destroy',
    'instance',
  ]);
}
