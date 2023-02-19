import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeId } from '@/core/actions/types';

export default function consumeId<D = never>(
  context: Partial<ConsumeId>,
  defaultValue?: D,
) {
  return consumeContext(context, 'id', [
    'find',
    'update',
    'destroy',
    'instance',
    'forId',
  ], defaultValue);
}
