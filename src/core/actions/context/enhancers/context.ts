import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionContext, ActionParsedExtension } from '@/core/actions/types';

/**
 * Merge the given context into the action's current context.
 * The context is not deeply merged.
 *
 * @param contextToMerge
 *
 * @category Enhancers
 */
export default function context<NC extends {}>(contextToMerge: NC) {
  return async <C extends {}>(action: Action<C>) => action.updateContext({
    ...await action.useContext(),
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
