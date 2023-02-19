import consumeSerializer from '@/core/actions/context/consumers/consumeSerializer';
import { Action, ConsumeSerializer } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default async function serializeInstance<C extends {}, SD>(
  action: Action<C & ConsumeSerializer<SD>>,
  instance: ModelInstance,
) {
  const context = await action.useContext();

  return consumeSerializer(context).serialize(instance, context);
}
