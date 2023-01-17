import context from '@/core/actions/context/enhancers/context';
import instanceData from '@/core/actions/context/enhancers/crud/instanceData';
import changeInstanceExistence from '@/core/actions/context/enhancers/hooks/changeInstanceExistence';
import onPreparing from '@/core/actions/context/enhancers/hooks/onPreparing';
import onSuccess from '@/core/actions/context/enhancers/hooks/onSuccess';
import runInstanceHooks from '@/core/actions/context/enhancers/hooks/runInstanceHooks';
import instance from '@/core/actions/context/enhancers/instance';
import { Action, ConsumeSerializer } from '@/core/actions/types';
import { ModelClassInstance, ModelInstance } from '@/core/model/types';

export default function update<
  C extends {},
  SD,
  D extends {},
  I extends ModelInstance<D>,
>(instanceToUpdate: ModelClassInstance<D> & I) {
  return (action: Action<C & ConsumeSerializer<SD>>) => action
    .use(instance<C & ConsumeSerializer<SD>, D, I>(instanceToUpdate))
    .use(instanceData(instanceToUpdate))
    .use(context({ action: 'UPDATE' }))
    .use(changeInstanceExistence(true))
    .use(onPreparing(runInstanceHooks(instanceToUpdate, ['updating', 'saving'])))
    .use(onSuccess(runInstanceHooks(instanceToUpdate, ['updated', 'saved'])));
}
