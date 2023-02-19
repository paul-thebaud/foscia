import consumeAdapter from '@/core/actions/context/consumers/consumeAdapter';
import { Action, ConsumeAdapter } from '@/core/actions/types';

export default function raw<C extends {}, AD>() {
  return async (action: Action<C & ConsumeAdapter<AD>>) => {
    const context = await action.useContext();

    return consumeAdapter(context).execute(context);
  };
}
