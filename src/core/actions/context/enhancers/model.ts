import Action from '@/core/actions/action';
import context from '@/core/actions/context/enhancers/context';
import target from '@/core/actions/context/enhancers/target';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';

/**
 * Target the given model.
 * Use its type and other applicable model's context.
 *
 * @param modelToUse
 *
 * @category Enhancers
 */
export default function model<D extends {}, I extends ModelInstance<D>, M extends Model<D, I>>(
  modelToUse: M,
) {
  return <C extends ActionContext>(action: Action<C>) => action
    .use(target<D, I, M>(modelToUse))
    .use(context({
      type: modelToUse.$config.type,
      // TODO Should baseURL be here?
      baseURL: modelToUse.$config.baseURL,
    }));
}

type ModelEnhancerExtension = ActionParsedExtension<{
  model<C extends ActionContext, A extends Action<C>, M extends Model>(
    this: Action<C> & A,
    model: M,
  ): Action<C & { model: M; type: string; }> & A;
}>;

model.extension = makeEnhancersExtension({ model }) as ModelEnhancerExtension;
