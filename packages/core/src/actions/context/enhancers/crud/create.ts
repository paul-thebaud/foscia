import context from '@foscia/core/actions/context/enhancers/context';
import instanceData from '@foscia/core/actions/context/enhancers/crud/instanceData';
import forId from '@foscia/core/actions/context/enhancers/forId';
import forInstance from '@foscia/core/actions/context/enhancers/forInstance';
import changeInstanceExistence
  from '@foscia/core/actions/context/enhancers/hooks/changeInstanceExistence';
import onRunning from '@foscia/core/actions/context/enhancers/hooks/onRunning';
import onSuccess from '@foscia/core/actions/context/enhancers/hooks/onSuccess';
import runInstanceHooks from '@foscia/core/actions/context/enhancers/hooks/runInstanceHooks';
import makeEnhancersExtension from '@foscia/core/actions/extensions/makeEnhancersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeId,
  ConsumeInstance,
  ConsumeModel,
  ConsumeSerializer,
} from '@foscia/core/actions/types';
import { Model, ModelClassInstance, ModelInstance } from '@foscia/core/model/types';

/**
 * Prepare context for an instance creation.
 *
 * @param instance
 *
 * @category Enhancers
 */
export default function create<
  C extends {},
  SD,
  D extends {},
  I extends ModelInstance<D>,
>(instance: ModelClassInstance<D> & I) {
  return (action: Action<C & ConsumeSerializer<SD>>) => action
    .use(forInstance<C & ConsumeSerializer<SD>, D, I>(instance))
    .use(instanceData(instance))
    .use(forId(undefined))
    .use(context({ action: 'create' }))
    .use(changeInstanceExistence(true))
    .use(onRunning(runInstanceHooks(instance, ['creating', 'saving'])))
    .use(onSuccess(runInstanceHooks(instance, ['created', 'saved'])));
}

type EnhancerExtension = ActionParsedExtension<{
  create<C extends {}, E extends {}, SD, D extends {}, I extends ModelInstance<D>>(
    this: Action<C & ConsumeSerializer<SD>, E>,
    instance: ModelClassInstance<D> & I,
  ): Action<C & ConsumeModel<Model<D, I>> & ConsumeInstance<I> & ConsumeId, E>;
}>;

create.extension = makeEnhancersExtension({ create }) as EnhancerExtension;
