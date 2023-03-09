import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

/**
 * Register a "preparing" hook callback on action.
 * Callback may be async.
 *
 * @param callback
 *
 * @category Enhancers
 */
export default function onPreparing<C extends {}>(
  callback: () => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'preparing', callback);

    return action;
  };
}

type OnPreparingEnhancerExtension = ActionParsedExtension<{
  onPreparing<C extends {}, E extends {}>(
    this: Action<C, E>,
    callback: () => Awaitable<void>,
  ): Action<C, E>;
}>;

onPreparing.extension = makeEnhancersExtension({ onPreparing }) as OnPreparingEnhancerExtension;
