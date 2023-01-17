import context from '@/core/actions/context/enhancers/context';
import forId from '@/core/actions/context/enhancers/forId';
import model from '@/core/actions/context/enhancers/model';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeId,
  ConsumeInstance,
  ConsumeModel,
  ConsumeType,
} from '@/core/actions/types';
import { Model, ModelClassInstance, ModelInstance } from '@/core/model/types';

export default function instance<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
>(instanceToUse: ModelClassInstance<D> & I) {
  return (action: Action<C>) => action
    .use(model(instanceToUse.$model as Model<D, I>))
    .use(context({ instance: instanceToUse }))
    .use(forId(instanceToUse.id));
}

type InstanceEnhancerExtension = ActionParsedExtension<{
  instance<C extends {}, E extends {}, D extends {}, I extends ModelInstance<D>>(
    this: Action<C, E>,
    instanceToUse: ModelClassInstance<D> & I,
  ): Action<C & ConsumeModel<Model<D, I>> & ConsumeInstance<I> & ConsumeType & ConsumeId, E>;
}>;

instance.extension = makeEnhancersExtension({ instance }) as InstanceEnhancerExtension;
