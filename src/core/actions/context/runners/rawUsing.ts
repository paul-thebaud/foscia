import Action from '@/core/actions/action';
import raw from '@/core/actions/context/runners/raw';
import { ConsumeAdapter } from '@/core/actions/types';
import { Awaitable } from '@/utilities/types';

export default function rawUsing<AD, ND>(transform: (data: AD) => Awaitable<ND>) {
  return async (action: Action<ConsumeAdapter<AD>>) => transform(await action.run(raw()));
}
