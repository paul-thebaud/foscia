import consumeContext, { CONSUME_DEFAULT } from '@/core/actions/context/consumers/consumeContext';
import { ConsumeCache } from '@/core/actions/types';

export default function consumeCache<D = never>(
  context: Partial<ConsumeCache>,
  defaultValue: D = CONSUME_DEFAULT,
) {
  return consumeContext(context, 'cache', ['context'], defaultValue);
}
