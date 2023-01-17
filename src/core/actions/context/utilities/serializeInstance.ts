import useContext from '@/core/actions/context/consumers/useContext';
import useSerializerContext from '@/core/actions/context/consumers/useSerializerContext';
import { Action, ConsumeSerializer } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default async function serializeInstance<C extends {}, SD>(
  action: Action<C & ConsumeSerializer<SD>>,
  instance: ModelInstance,
) {
  const serializer = await useSerializerContext(action);

  return serializer.serialize(
    instance,
    await useContext(action),
  );
}
