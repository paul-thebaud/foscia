import forId from '@/core/actions/context/enhancers/forId';
import model from '@/core/actions/context/enhancers/model';
import { Action } from '@/core/actions/types';
import { Model, ModelId, ModelInstance } from '@/core/model/types';

export default function find<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
  M extends Model<D, I>,
>(modelToUse: M, id: ModelId) {
  return (action: Action<C>) => action
    .use(model(modelToUse))
    .use(forId(id));
}
