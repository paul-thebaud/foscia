import Action from '@/core/actions/action';
import raw from '@/core/actions/context/runners/raw';
import { ConsumeAdapter } from '@/core/actions/types';

export default function none() {
  return async (action: Action<ConsumeAdapter>) => {
    await action.run(raw());
  };
}
