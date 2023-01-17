import raw from '@/core/actions/context/runners/raw';
import { Action, ConsumeAdapter } from '@/core/actions/types';

export default function none<C extends {}>() {
  return async (action: Action<C & ConsumeAdapter>) => {
    await action.run(raw());
  };
}
