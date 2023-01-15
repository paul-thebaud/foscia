import Action from '@/core/actions/action';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

export default function onSuccess<C extends ActionContext>(
  callback: (event: { context: C; result: unknown; }) => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'success', callback);
  };
}

type OnSuccessEnhancerExtension = ActionParsedExtension<{
  onSuccess<C extends ActionContext, A extends Action<C>>(
    this: Action<C> & A,
    callback: (event: { context: C; result: unknown; }) => Awaitable<void>,
  ): Action<C> & A;
}>;

onSuccess.extension = makeEnhancersExtension({ onSuccess }) as OnSuccessEnhancerExtension;
