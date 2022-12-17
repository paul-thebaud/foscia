import registerHook from '@/core/hooks/registerHook';
import { Model, ModelInstance } from '@/core/model/types';
import { Awaitable } from '@/core/utilities/types';

export default function onSaving<I extends ModelInstance>(
  model: Model<any, I>,
  callback: (instance: I) => Awaitable<void>,
) {
  return registerHook(model, 'saving', callback);
}
