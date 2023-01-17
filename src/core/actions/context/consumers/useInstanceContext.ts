import useRequiredContext from '@/core/actions/context/consumers/useRequiredContext';
import { ConsumableContext, ConsumeInstance } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default async function useInstanceContext<C extends {}, I extends ModelInstance>(
  actionOrContext: ConsumableContext<C & ConsumeInstance<I>>,
) {
  return useRequiredContext(actionOrContext, 'instance', [
    'create',
    'update',
    'save',
    'destroy',
    'instance',
  ]);
}
