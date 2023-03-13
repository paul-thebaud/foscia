import consumeContext, { CONSUME_DEFAULT } from '@/core/actions/context/consumers/consumeContext';
import { ConsumeInclude } from '@/core/actions/types';

export default function consumeInclude<D = never>(
  context: Partial<ConsumeInclude>,
  defaultValue: D = CONSUME_DEFAULT,
) {
  return consumeContext(context, 'include', ['include'], defaultValue);
}
