import Action from '@/core/actions/action';
import context from '@/core/actions/context/enhancers/context';
import find from '@/core/actions/context/enhancers/crud/find';
import instancePayload from '@/core/actions/context/enhancers/crud/instancePayload';
import forInstance from '@/core/actions/context/enhancers/forInstance';
import instanceExistence from '@/core/actions/context/enhancers/hooks/instanceExistence';
import { ConsumeAdapter, ConsumeSerializer } from '@/core/actions/types';
import { ModelInstance, ModelSchemaRaw } from '@/core/model/types';

export default function update<R, D, S extends ModelSchemaRaw, I>(
  instance: ModelInstance<S> & I,
) {
  return async <C extends ConsumeAdapter<R, D> & ConsumeSerializer<D>>(a: Action<C>) => a
    .use(forInstance(instance))
    .use(find(instance.id))
    .use(instancePayload(instance))
    .use(instanceExistence(true))
    .use(context({
      method: 'PATCH',
    }));
}
