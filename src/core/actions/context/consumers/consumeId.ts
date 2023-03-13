import consumeContext, { CONSUME_DEFAULT } from '@/core/actions/context/consumers/consumeContext';
import { ConsumeId } from '@/core/actions/types';

export default function consumeId<D = never>(
  context: Partial<ConsumeId>,
  defaultValue: D = CONSUME_DEFAULT,
) {
  return consumeContext(context, 'id', [
    'find',
    'update',
    'destroy',
    'instance',
    'forId',
  ], defaultValue);
}
