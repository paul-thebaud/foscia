import context from '@foscia/core/actions/context/enhancers/context';
import target from '@foscia/core/actions/context/enhancers/target';
import makeEnhancersExtension from '@foscia/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ConsumeModel } from '@foscia/core/actions/types';
import { Model, ModelInstance } from '@foscia/core/model/types';
import normalize from '@foscia/core/normalization/normalize';

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
      modelPath: normalize(
        model.$config.path ?? model.$type,
        model.$config.normalizeModelPath ?? model.$config.normalizePath,
      ),
      baseURL: model.$config.baseURL ?? undefined,
    }));
}

type EnhancerExtension = ActionParsedExtension<{
  forModel<C extends {}, E extends {}, M extends Model>(
    this: Action<C, E>,
    model: M,
  ): Action<C & ConsumeModel<M>, E>;
}>;

forModel.extension = makeEnhancersExtension({ forModel }) as EnhancerExtension;
