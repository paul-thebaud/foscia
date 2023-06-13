import registerHook from '@/core/hooks/registerHook';
import { Model, ModelHookCallback, ModelInstance } from '@/core/model/types';
import { Awaitable } from '@/utilities';

export default function onSaved<I extends ModelInstance>(
  model: Model<any, I>,
  callback: (instance: I) => Awaitable<void>,
) {
  return registerHook(model, 'saved', callback as ModelHookCallback);
}
