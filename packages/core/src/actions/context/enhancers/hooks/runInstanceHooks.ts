import runHook from '@foscia/core/hooks/runHook';
import { ModelHooksDefinition, ModelInstance } from '@foscia/core/model/types';
import { ArrayableVariadic, sequentialTransform, wrapVariadic } from '@foscia/utils';

export default function runInstanceHooks(
  instance: ModelInstance,
  ...hooks: ArrayableVariadic<keyof ModelHooksDefinition>
) {
  return async () => {
    await sequentialTransform(wrapVariadic(...hooks).map(
      (hook) => () => runHook(instance.$model, hook, instance),
    ));
  };
}
