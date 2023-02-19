import forId from '@/core/actions/context/enhancers/forId';
import forModel from '@/core/actions/context/enhancers/forModel';
import { Action } from '@/core/actions/types';
import { Model, ModelId, ModelInstance } from '@/core/model/types';

export default function find<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
  M extends Model<D, I>,
>(modelToUse: M, id: ModelId) {
  return (action: Action<C>) => action
    .use(forModel(modelToUse))
    .use(forId(id));
}
