import { context } from '@/core';
import { Optional } from '@/utilities';

export default function abortSignal(controllerOrSignal?: Optional<AbortController | AbortSignal>) {
  let signal: Optional<AbortSignal>;
  if (controllerOrSignal) {
    signal = controllerOrSignal instanceof AbortController
      ? controllerOrSignal.signal
      : controllerOrSignal;
  }

  return context({ signal });
}
