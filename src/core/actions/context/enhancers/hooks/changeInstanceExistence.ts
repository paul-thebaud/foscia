import Action from '@/core/actions/action';
import onSuccess from '@/core/actions/context/enhancers/hooks/onSuccess';
import { ActionContext, ConsumeInstance } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default function changeInstanceExistence(
  willExists: boolean,
) {
  return <I extends ModelInstance, C extends ActionContext>(
    action: Action<C & ConsumeInstance<I>>,
  ) => action.use(onSuccess(({ context }) => {
    context.instance.exists = willExists;
  }));
}
