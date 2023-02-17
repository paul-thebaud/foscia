import raw from '@/core/actions/context/runners/raw';
import { Action, ConsumeAdapter } from '@/core/actions/types';
import { Awaitable } from '@/utilities';

export default function rawUsing<C extends {}, AD, ND>(transform: (data: AD) => Awaitable<ND>) {
  return async (
    action: Action<C & ConsumeAdapter<AD>>,
  ) => transform(await action.run(raw()));
}
