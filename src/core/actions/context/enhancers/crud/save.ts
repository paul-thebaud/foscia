import create from '@/core/actions/context/enhancers/crud/create';
import update from '@/core/actions/context/enhancers/crud/update';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeId,
  ConsumeInstance,
  ConsumeModel,
  ConsumeSerializer,
  ConsumeType,
} from '@/core/actions/types';
import { Model, ModelClassInstance, ModelInstance } from '@/core/model/types';

/**
 * Prepare context for an instance creation or update depending on its existence
 * state. Calls "update" if the instance exists, otherwise call "create".
 *
 * @param instance
 *
 * @category Enhancers
 */
export default function save<
  C extends {},
  SD,
  D extends {},
  I extends ModelInstance<D>,
>(instance: ModelClassInstance<D> & I) {
  return (action: Action<C & ConsumeSerializer<SD>>) => (
    instance.exists
      ? action.use(update(instance))
      : action.use(create(instance))
  ) as Action<C & ConsumeModel<Model<D, I>> & ConsumeInstance<I> & ConsumeType & ConsumeId>;
}

type SaveEnhancerExtension = ActionParsedExtension<{
  save<C extends {}, E extends {}, SD, D extends {}, I extends ModelInstance<D>>(
    this: Action<C & ConsumeSerializer<SD>, E>,
    instance: ModelClassInstance<D> & I,
  ): Action<C & ConsumeModel<Model<D, I>> & ConsumeInstance<I> & ConsumeType & ConsumeId, E>;
}>;

save.extension = makeEnhancersExtension({ save }) as SaveEnhancerExtension;
