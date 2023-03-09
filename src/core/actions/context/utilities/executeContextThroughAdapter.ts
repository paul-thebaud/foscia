import consumeAdapter from '@/core/actions/context/consumers/consumeAdapter';
import { ActionContext, ConsumeAdapter } from '@/core/actions/types';
import { Awaitable } from '@/utilities';

export default function executeContextThroughAdapter<C extends ActionContext, AD>(
  context: C & ConsumeAdapter<AD>,
): Awaitable<AD> {
  const adapter = consumeAdapter(context);
  const action = context.action ?? 'read';
  if (action in adapter && typeof (adapter as any)[action] === 'function') {
    return (adapter as any)[action](context);
  }

  return adapter.execute(context);
}
