import Action from '@/core/actions/action';
import useContext from '@/core/actions/context/consumers/useContext';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';

export default function context<NC extends ActionContext>(
  contextToMerge: NC,
) {
  return async <C extends ActionContext>(action: Action<C>) => action.updateContext({
    ...await useContext(action),
    ...contextToMerge,
  });
}

type ContextEnhancerExtension = ActionParsedExtension<{
  context<C extends ActionContext, A extends Action<C>, NC extends ActionContext>(
    this: Action<C> & A,
    context: NC,
  ): Action<C & NC> & A;
}>;

context.extension = makeEnhancersExtension({ context }) as ContextEnhancerExtension;
