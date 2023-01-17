import context from '@/core/actions/context/enhancers/context';
import changeInstanceExistence from '@/core/actions/context/enhancers/hooks/changeInstanceExistence';
import onPreparing from '@/core/actions/context/enhancers/hooks/onPreparing';
import onSuccess from '@/core/actions/context/enhancers/hooks/onSuccess';
import runInstanceHooks from '@/core/actions/context/enhancers/hooks/runInstanceHooks';
import instance from '@/core/actions/context/enhancers/instance';
import { Action } from '@/core/actions/types';
import { ModelClassInstance, ModelInstance } from '@/core/model/types';

export default function destroy<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
>(instanceToDestroy: ModelClassInstance<D> & I) {
  return (action: Action<C>) => action
    .use(instance<C, D, I>(instanceToDestroy))
    .use(context({ action: 'DESTROY' }))
    .use(changeInstanceExistence(false))
    .use(onPreparing(runInstanceHooks(instanceToDestroy, ['destroying'])))
    .use(onSuccess(runInstanceHooks(instanceToDestroy, ['destroyed'])));
}
