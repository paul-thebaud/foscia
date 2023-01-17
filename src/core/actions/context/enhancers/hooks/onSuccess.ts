import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

export default function onSuccess<C extends {}>(
  callback: (event: { context: C; result: unknown; }) => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'success', callback);
  };
}

type OnSuccessEnhancerExtension = ActionParsedExtension<{
  onSuccess<C extends {}, E extends {}>(
    this: Action<C, E>,
    callback: (event: { context: C; result: unknown; }) => Awaitable<void>,
  ): Action<C, E>;
}>;

onSuccess.extension = makeEnhancersExtension({ onSuccess }) as OnSuccessEnhancerExtension;
