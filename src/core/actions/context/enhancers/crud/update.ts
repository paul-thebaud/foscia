import context from '@/core/actions/context/enhancers/context';
import instanceData from '@/core/actions/context/enhancers/crud/instanceData';
import forInstance from '@/core/actions/context/enhancers/forInstance';
import changeInstanceExistence
  from '@/core/actions/context/enhancers/hooks/changeInstanceExistence';
import onRunning from '@/core/actions/context/enhancers/hooks/onRunning';
import onSuccess from '@/core/actions/context/enhancers/hooks/onSuccess';
import runInstanceHooks from '@/core/actions/context/enhancers/hooks/runInstanceHooks';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeId,
  ConsumeInstance,
  ConsumeModel,
  ConsumeSerializer,
} from '@/core/actions/types';
import { Model, ModelClassInstance, ModelInstance } from '@/core/model/types';

/**
 * Prepare context for an instance update.
 *
 * @param instance
 *
 * @category Enhancers
 */
export default function update<
  C extends {},
  SD,
  D extends {},
  I extends ModelInstance<D>,
>(instance: ModelClassInstance<D> & I) {
  return (action: Action<C & ConsumeSerializer<SD>>) => action
    .use(forInstance<C & ConsumeSerializer<SD>, D, I>(instance))
    .use(instanceData(instance))
    .use(context({ action: 'update' }))
    .use(changeInstanceExistence(true))
    .use(onRunning(runInstanceHooks(instance, ['updating', 'saving'])))
    .use(onSuccess(runInstanceHooks(instance, ['updated', 'saved'])));
}

type EnhancerExtension = ActionParsedExtension<{
  update<C extends {}, E extends {}, SD, D extends {}, I extends ModelInstance<D>>(
    this: Action<C & ConsumeSerializer<SD>, E>,
    instance: ModelClassInstance<D> & I,
  ): Action<C & ConsumeModel<Model<D, I>> & ConsumeInstance<I> & ConsumeId, E>;
}>;

update.extension = makeEnhancersExtension({ update }) as EnhancerExtension;
