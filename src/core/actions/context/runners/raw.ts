import useAdapterContext from '@/core/actions/context/consumers/useAdapterContext';
import useContext from '@/core/actions/context/consumers/useContext';
import { Action, ConsumeAdapter } from '@/core/actions/types';

export default function raw<C extends {}, AD>() {
  return async (action: Action<C & ConsumeAdapter<AD>>) => {
    const adapter = await useAdapterContext(action);

    return adapter.execute(await useContext(action));
  };
}
