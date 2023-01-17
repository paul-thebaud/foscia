import context from '@/core/actions/context/enhancers/context';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ConsumeModel } from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';

/**
 * Only target the given model.
 * In most cases, you should use {@link model}, {@link find} or any other
 * model's enhancers instead of `target`.
 *
 * @param model
 *
 * @category Enhancers
 */
export default function target<
  D extends {},
  I extends ModelInstance<D>,
  M extends Model<D, I>,
>(model: M) {
  return context({ model });
}

type TargetEnhancerExtension = ActionParsedExtension<{
  target<C extends {}, E extends {}, M extends Model>(
    this: Action<C, E>,
    model: M,
  ): Action<C & ConsumeModel<M>, E>;
}>;

target.extension = makeEnhancersExtension({ target }) as TargetEnhancerExtension;
