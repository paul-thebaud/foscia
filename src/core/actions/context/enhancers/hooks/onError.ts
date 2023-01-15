import Action from '@/core/actions/action';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

export default function onError<C extends ActionContext>(
  callback: (event: { context: C; error: unknown; }) => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'error', callback);
  };
}

type OnErrorEnhancerExtension = ActionParsedExtension<{
  onError<C extends ActionContext, A extends Action<C>>(
    this: Action<C> & A,
    callback: (event: { context: C; error: unknown; }) => Awaitable<void>,
  ): Action<C> & A;
}>;

onError.extension = makeEnhancersExtension({ onError }) as OnErrorEnhancerExtension;
