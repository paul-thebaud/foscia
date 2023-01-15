import Action from '@/core/actions/action';
import context from '@/core/actions/context/enhancers/context';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';
import { ModelId } from '@/core/model/types';

export default function forId(id: ModelId | undefined) {
  return <C extends ActionContext>(action: Action<C>) => {
    action.use(context({ id }));
  };
}

type ForIdEnhancerExtension = ActionParsedExtension<{
  forId<C extends ActionContext, A extends Action<C>>(
    this: Action<C> & A,
    id: ModelId | undefined,
  ): Action<C & { id: ModelId | undefined; }> & A;
}>;

forId.extension = makeEnhancersExtension({ forId }) as ForIdEnhancerExtension;
