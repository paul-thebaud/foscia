import Action from '@/core/actions/action';
import context from '@/core/actions/context/enhancers/context';
import forId from '@/core/actions/context/enhancers/forId';
import model from '@/core/actions/context/enhancers/model';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';
import { Model, ModelClassInstance, ModelId, ModelInstance } from '@/core/model/types';

export default function instance<D extends {}, I extends ModelInstance<D>>(
  instanceToUse: ModelClassInstance<D> & I,
) {
  return <C extends ActionContext>(action: Action<C>) => action
    .use(model(instanceToUse.$model as Model<D, I>))
    .use(context({ instance: instanceToUse }))
    .use(forId(instanceToUse.id));
}

type InstanceEnhancerExtension = ActionParsedExtension<{
  instance<C extends ActionContext, A extends Action<C>, D extends {}, I extends ModelInstance<D>>(
    this: Action<C> & A,
    instanceToUse: ModelClassInstance<D> & I,
  ): Action<C & { model: Model<D, I>; instance: I; type: string; id: ModelId | undefined; }> & A;
}>;

instance.extension = makeEnhancersExtension({ instance }) as InstanceEnhancerExtension;
