import Action from '@/core/actions/action';
import useContext from '@/core/actions/context/consumers/useContext';
import useSerializerContext from '@/core/actions/context/consumers/useSerializerContext';
import { ConsumeSerializer } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default async function serializeInstance<SD>(
  action: Action<ConsumeSerializer<SD>>,
  instance: ModelInstance,
) {
  const serializer = await useSerializerContext(action);

  return serializer.serialize(
    instance,
    await useContext(action),
  );
}
