import registerHook from '@foscia/core/hooks/registerHook';
import { Model, ModelHookCallback, ModelInstance } from '@foscia/core/model/types';
import { Awaitable } from '@foscia/utils';

export default function onUpdating<I extends ModelInstance>(
  model: Model<any, I>,
  callback: (instance: I) => Awaitable<void>,
) {
  return registerHook(model, 'updating', callback as ModelHookCallback);
}
