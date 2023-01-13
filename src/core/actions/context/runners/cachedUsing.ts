import Action from '@/core/actions/action';
import useCacheContext from '@/core/actions/context/consumers/useCacheContext';
import useContext from '@/core/actions/context/consumers/useContext';
import useIdContext from '@/core/actions/context/consumers/useIdContext';
import useTypeContext from '@/core/actions/context/consumers/useTypeContext';
import { ActionContext, ConsumeCache, ConsumeModel } from '@/core/actions/types';
import { Model, ModelInstance } from '@/core/model/types';
import loaded from '@/core/model/utilities/loaded';
import { Awaitable, isNil } from '@/utilities';

export type CachedUsingData<I extends ModelInstance> = {
  instance: I;
};

export default function cachedUsing<
  C extends ActionContext,
  M extends Model,
  I extends InstanceType<M>,
  ND,
>(transform: (data: CachedUsingData<I>) => Awaitable<ND>) {
  return async (action: Action<C & ConsumeCache & ConsumeModel<M>>) => {
    const cache = await useCacheContext(action);
    const instance = await cache.find(await useTypeContext(action), await useIdContext(action));
    const context = await useContext(action);
    if (isNil(instance) || !loaded(instance, context.includes ?? [])) {
      return null;
    }

    return transform({ instance });
  };
}
