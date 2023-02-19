import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeModel } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function consumeModel<M extends Model, D = never>(
  context: Partial<ConsumeModel<M>>,
  defaultValue?: D,
) {
  return consumeContext(context, 'model', [
    'model',
    'find',
    'create',
    'update',
    'save',
    'destroy',
    'instance',
    'target',
  ], defaultValue);
}
