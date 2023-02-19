import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeType } from '@/core/actions/types';

export default function consumeType<D = never>(
  context: Partial<ConsumeType>,
  defaultValue?: D,
) {
  return consumeContext(context, 'type', [
    'model',
    'find',
    'update',
    'destroy',
    'instance',
  ], defaultValue);
}
