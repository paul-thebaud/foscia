import consumeContext, { CONSUME_DEFAULT } from '@/core/actions/context/consumers/consumeContext';
import { ConsumeAdapter } from '@/core/actions/types';

export default function consumeAdapter<AD, D = never>(
  context: Partial<ConsumeAdapter<AD>>,
  defaultValue: D = CONSUME_DEFAULT,
) {
  return consumeContext(context, 'adapter', ['context'], defaultValue);
}
