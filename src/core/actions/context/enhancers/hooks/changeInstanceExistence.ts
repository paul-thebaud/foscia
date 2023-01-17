import onSuccess from '@/core/actions/context/enhancers/hooks/onSuccess';
import { Action, ConsumeInstance } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default function changeInstanceExistence<C extends {}, I extends ModelInstance>(
  willExists: boolean,
) {
  return (action: Action<C & ConsumeInstance<I>>) => action.use(onSuccess(({ context }) => {
    context.instance.exists = willExists;
  }));
}
