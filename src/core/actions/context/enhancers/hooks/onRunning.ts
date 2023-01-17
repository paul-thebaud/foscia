import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

export default function onRunning<C extends {}>(
  callback: (event: { context: C; }) => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'running', callback);
  };
}

type OnRunningEnhancerExtension = ActionParsedExtension<{
  onRunning<C extends {}, E extends {}>(
    this: Action<C, E>,
    callback: (event: { context: C; }) => Awaitable<void>,
  ): Action<C, E>;
}>;

onRunning.extension = makeEnhancersExtension({ onRunning }) as OnRunningEnhancerExtension;
