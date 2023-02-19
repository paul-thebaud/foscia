import context from '@/core/actions/context/enhancers/context';
import instanceData from '@/core/actions/context/enhancers/crud/instanceData';
import forId from '@/core/actions/context/enhancers/forId';
import changeInstanceExistence from '@/core/actions/context/enhancers/hooks/changeInstanceExistence';
import onPreparing from '@/core/actions/context/enhancers/hooks/onPreparing';
import onSuccess from '@/core/actions/context/enhancers/hooks/onSuccess';
import runInstanceHooks from '@/core/actions/context/enhancers/hooks/runInstanceHooks';
import forInstance from '@/core/actions/context/enhancers/forInstance';
import { Action, ConsumeSerializer } from '@/core/actions/types';
import { ModelClassInstance, ModelInstance } from '@/core/model/types';

export default function create<
  C extends {},
  SD,
  D extends {},
  I extends ModelInstance<D>,
>(instanceToCreate: ModelClassInstance<D> & I) {
  return (action: Action<C & ConsumeSerializer<SD>>) => action
    .use(forInstance<C & ConsumeSerializer<SD>, D, I>(instanceToCreate))
    .use(instanceData(instanceToCreate))
    .use(forId(undefined))
    .use(context({ action: 'CREATE' }))
    .use(changeInstanceExistence(true))
    .use(onPreparing(runInstanceHooks(instanceToCreate, ['creating', 'saving'])))
    .use(onSuccess(runInstanceHooks(instanceToCreate, ['created', 'saved'])));
}
