import forId from '@/core/actions/context/enhancers/forId';
import forModel from '@/core/actions/context/enhancers/forModel';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ConsumeId, ConsumeModel } from '@/core/actions/types';
import { Model, ModelId, ModelInstance } from '@/core/model/types';

/**
 * Target a given model record using its ID.
 *
 * @param model
 * @param id
 *
 * @category Enhancers
 */
export default function find<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
  M extends Model<D, I>,
>(model: M, id: ModelId) {
  return (action: Action<C>) => action
    .use(forModel(model))
    .use(forId(id));
}

type EnhancerExtension = ActionParsedExtension<{
  find<C extends {}, E extends {}, M extends Model>(
    this: Action<C, E>,
    model: M,
    id: ModelId,
  ): Action<C & ConsumeModel<M> & ConsumeId, E>;
}>;

find.extension = makeEnhancersExtension({ find }) as EnhancerExtension;
