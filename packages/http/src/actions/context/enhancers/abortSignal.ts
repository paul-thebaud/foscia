import { Action, ActionParsedExtension, context, makeEnhancersExtension } from '@foscia/core';
import { Optional } from '@foscia/shared';

/**
 * Configure an abort signal on the request to
 * [make it abortable](https://developer.chrome.com/blog/abortable-fetch/).
 *
 * @param controllerOrSignal
 *
 * @category Enhancers
 */
export default function abortSignal(controllerOrSignal?: Optional<AbortController | AbortSignal>) {
  let signal: Optional<AbortSignal>;
  if (controllerOrSignal) {
    signal = controllerOrSignal instanceof AbortController
      ? controllerOrSignal.signal
      : controllerOrSignal;
  }

  return context({ signal });
}

type AbortSignalEnhancerExtension = ActionParsedExtension<{
  abortSignal<C extends {}, E extends {}>(
    this: Action<C, E>,
    controllerOrSignal?: Optional<AbortController | AbortSignal>,
  ): Action<C, E>;
}>;

abortSignal.extension = makeEnhancersExtension({ abortSignal }) as AbortSignalEnhancerExtension;
