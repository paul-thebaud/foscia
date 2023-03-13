import consumeContext, { CONSUME_DEFAULT } from '@/core/actions/context/consumers/consumeContext';
import { ConsumeSerializer } from '@/core/actions/types';

export default function consumeSerializer<SD, D = never>(
  context: Partial<ConsumeSerializer<SD>>,
  defaultValue: D = CONSUME_DEFAULT,
) {
  return consumeContext(context, 'serializer', ['context'], defaultValue);
}
