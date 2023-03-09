import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

/**
 * Register a "finally" hook callback on action.
 * Callback may be async.
 *
 * @param callback
 *
 * @category Enhancers
 */
export default function onFinally<C extends {}>(
  callback: (event: { context: C; }) => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'finally', callback);
  };
}

type OnFinallyEnhancerExtension = ActionParsedExtension<{
  onFinally<C extends {}, E extends {}>(
    this: Action<C, E>,
    callback: (event: { context: C; }) => Awaitable<void>,
  ): Action<C, E>;
}>;

onFinally.extension = makeEnhancersExtension({ onFinally }) as OnFinallyEnhancerExtension;
