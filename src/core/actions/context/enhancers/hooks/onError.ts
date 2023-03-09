import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension } from '@/core/actions/types';
import registerHook from '@/core/hooks/registerHook';
import { Awaitable } from '@/utilities';

/**
 * Register a "error" hook callback on action.
 * Callback may be async.
 *
 * @param callback
 *
 * @category Enhancers
 */
export default function onError<C extends {}>(
  callback: (event: { context: C; error: unknown; }) => Awaitable<void>,
) {
  return (action: Action<C>) => {
    registerHook(action, 'error', callback);
  };
}

type OnErrorEnhancerExtension = ActionParsedExtension<{
  onError<C extends {}, E extends {}>(
    this: Action<C, E>,
    callback: (event: { context: C; error: unknown; }) => Awaitable<void>,
  ): Action<C, E>;
}>;

onError.extension = makeEnhancersExtension({ onError }) as OnErrorEnhancerExtension;
