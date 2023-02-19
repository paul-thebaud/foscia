import context from '@/core/actions/context/enhancers/context';
import forId from '@/core/actions/context/enhancers/forId';
import forModel from '@/core/actions/context/enhancers/forModel';
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

export default function forInstance<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
>(instance: ModelClassInstance<D> & I) {
  return (action: Action<C>) => action
    .use(forModel(instance.$model as Model<D, I>))
    .use(context({ instance }))
    .use(forId(instance.id));
}

type InstanceEnhancerExtension = ActionParsedExtension<{
  forInstance<C extends {}, E extends {}, D extends {}, I extends ModelInstance<D>>(
    this: Action<C, E>,
    instanceToUse: ModelClassInstance<D> & I,
  ): Action<C & ConsumeModel<Model<D, I>> & ConsumeInstance<I> & ConsumeType & ConsumeId, E>;
}>;

forInstance.extension = makeEnhancersExtension({ forInstance }) as InstanceEnhancerExtension;
