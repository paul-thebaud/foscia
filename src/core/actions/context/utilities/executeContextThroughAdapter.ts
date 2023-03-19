import consumeAction from '@/core/actions/context/consumers/consumeAction';
import consumeAdapter from '@/core/actions/context/consumers/consumeAdapter';
import { ConsumeAdapter } from '@/core/actions/types';
import { Awaitable } from '@/utilities';

export default function executeContextThroughAdapter<AD>(
  context: ConsumeAdapter<AD>,
): Awaitable<AD> {
  const adapter = consumeAdapter(context);
  const action = consumeAction(context, 'read');
  if (action in adapter && typeof (adapter as any)[action] === 'function') {
    return (adapter as any)[action](context);
  }

  return adapter.execute(context);
}
