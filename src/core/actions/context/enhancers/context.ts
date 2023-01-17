import useContext from '@/core/actions/context/consumers/useContext';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, Action, ActionParsedExtension } from '@/core/actions/types';

export default function context<NC extends {}>(contextToMerge: NC) {
  return async <C extends {}>(action: Action<C>) => action.updateContext({
    ...await useContext(action),
    ...contextToMerge,
  });
}

type ContextEnhancerExtension = ActionParsedExtension<{
  context<C extends {}, E extends {}, NC extends ActionContext>(
    this: Action<C, E>,
    context: NC,
  ): Action<C & NC, E>;
}>;

context.extension = makeEnhancersExtension({ context }) as ContextEnhancerExtension;
