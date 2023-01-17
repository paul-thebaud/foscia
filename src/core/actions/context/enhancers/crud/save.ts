import create from '@/core/actions/context/enhancers/crud/create';
import update from '@/core/actions/context/enhancers/crud/update';
import {
  Action,
  ConsumeId,
  ConsumeInstance,
  ConsumeModel,
  ConsumeSerializer,
  ConsumeType,
} from '@/core/actions/types';
import { Model, ModelClassInstance, ModelInstance } from '@/core/model/types';

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
