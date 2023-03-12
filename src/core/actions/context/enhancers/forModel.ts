import context from '@/core/actions/context/enhancers/context';
import target from '@/core/actions/context/enhancers/target';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ConsumeModel } from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';

/**
 * Target the given model.
 * Use its type and other applicable model's context.
 *
 * @param model
 *
 * @category Enhancers
 */
export default function forModel<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
  M extends Model<D, I>,
>(model: M) {
  return (action: Action<C>) => action
    .use(target<D, I, M>(model))
    .use(context({
      // TODO Should baseURL be here?
      baseURL: model.$config.baseURL,
      modelPath: model.$config.path ?? model.$config.type,
    }));
}

type EnhancerExtension = ActionParsedExtension<{
  forModel<C extends {}, E extends {}, M extends Model>(
    this: Action<C, E>,
    model: M,
  ): Action<C & ConsumeModel<M>, E>;
}>;

forModel.extension = makeEnhancersExtension({ forModel }) as EnhancerExtension;
