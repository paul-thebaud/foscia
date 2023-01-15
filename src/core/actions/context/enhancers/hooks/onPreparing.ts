import Action from '@/core/actions/action';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

export default function onPreparing<C extends ActionContext>(
  callback: () => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'preparing', callback);
  };
}

type OnPreparingEnhancerExtension = ActionParsedExtension<{
  onPreparing<C extends ActionContext, A extends Action<C>>(
    this: Action<C> & A,
    callback: () => Awaitable<void>,
  ): Action<C> & A;
}>;

onPreparing.extension = makeEnhancersExtension({ onPreparing }) as OnPreparingEnhancerExtension;
