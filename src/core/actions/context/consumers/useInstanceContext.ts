import useRequiredContext from '@/core/actions/context/consumers/useRequiredContext';
import { ConsumableContext, ConsumeInstance } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default async function useInstanceContext<I extends ModelInstance>(
  actionOrContext: ConsumableContext<ConsumeInstance<I>>,
) {
  return useRequiredContext(actionOrContext, 'instance', [
    'create',
    'update',
    'save',
    'destroy',
    'instance',
  ]);
}
