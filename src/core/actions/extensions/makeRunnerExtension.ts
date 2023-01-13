import type Action from '@/core/actions/action';
import extractActionExtension, { ActionExtensionObject } from '@/core/actions/extensions/extractActionExtension';
import { ContextRunner } from '@/core/actions/types';

export default function makeRunnerExtension<
  N extends string,
  A extends any[],
  C extends {},
  R,
>(extensionObject: ActionExtensionObject<N, (...args: A) => ContextRunner<C, R>>) {
  const { name, fnc } = extractActionExtension(extensionObject);

  return {
    name,
    method(this: Action<C>, ...args: A) {
      return this.run(fnc(...args));
    },
  };
}
