import type Action from '@/core/actions/action';
import extractActionExtension, { ActionExtensionObject } from '@/core/actions/extensions/extractActionExtension';
import { ContextEnhancer } from '@/core/actions/types';

export default function makeEnhancerExtension<
  N extends string,
  A extends any[],
  C extends {},
  NC extends {},
>(extensionObject: ActionExtensionObject<N, (...args: A) => ContextEnhancer<C, NC>>) {
  const { name, fnc } = extractActionExtension(extensionObject);

  return {
    name,
    method(this: Action<C>, ...args: A) {
      return this.use(fnc(...args));
    },
  };
}
