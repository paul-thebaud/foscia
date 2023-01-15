import Action from '@/core/actions/action';
import context from '@/core/actions/context/enhancers/context';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';

/**
 * Only target the given model.
 * In most cases, you should use {@link model}, {@link find} or any other
 * model's enhancers instead of `target`.
 *
 * @param modelToUse
 *
 * @category Enhancers
 */
export default function target<D extends {}, I extends ModelInstance<D>, M extends Model<D, I>>(
  modelToUse: M,
) {
  return <C extends ActionContext>(
    action: Action<C>,
  ) => action.use(context({ model: modelToUse }));
}

type TargetEnhancerExtension = ActionParsedExtension<{
  target<C extends ActionContext, A extends Action<C>, M extends Model>(
    this: Action<C> & A,
    model: M,
  ): Action<C & { model: M; }> & A;
}>;

target.extension = makeEnhancersExtension({ target }) as TargetEnhancerExtension;
