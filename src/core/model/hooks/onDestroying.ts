import registerHook from '@/core/hooks/registerHook';
import { Model, ModelInstance } from '@/core/model/types';
import { Awaitable } from '@/utilities';

export default function onDestroying<I extends ModelInstance>(
  model: Model<any, I>,
  callback: (instance: I) => Awaitable<void>,
) {
  return registerHook(model, 'destroying', callback);
}
