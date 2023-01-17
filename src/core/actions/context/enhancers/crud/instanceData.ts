import context from '@/core/actions/context/enhancers/context';
import serializeInstance from '@/core/actions/context/utilities/serializeInstance';
import { Action, ConsumeSerializer } from '@/core/actions/types';
import { ModelInstance } from '@/core/model/types';

export default function instanceData<C extends {}, SD>(instance: ModelInstance) {
  return async (action: Action<C & ConsumeSerializer<SD>>) => action.use(context({
    data: await serializeInstance(action, instance),
  }));
}
