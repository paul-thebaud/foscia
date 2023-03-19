import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeModel } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function consumeModel<C extends {}, M extends Model, D = never>(
  context: C & Partial<ConsumeModel<M>>,
  defaultValue?: D,
) {
  return consumeContext(context, 'model', [
    'forModel',
    'find',
    'create',
    'update',
    'save',
    'destroy',
    'forInstance',
    'target',
  ], defaultValue);
}
