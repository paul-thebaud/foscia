import Action from '@/core/actions/action';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

export default function onRunning<C extends ActionContext>(
  callback: (event: { context: C; }) => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'running', callback);
  };
}

type OnRunningEnhancerExtension = ActionParsedExtension<{
  onRunning<C extends ActionContext, A extends Action<C>>(
    this: Action<C> & A,
    callback: (event: { context: C; }) => Awaitable<void>,
  ): Action<C> & A;
}>;

onRunning.extension = makeEnhancersExtension({ onRunning }) as OnRunningEnhancerExtension;
