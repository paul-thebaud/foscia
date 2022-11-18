import Action from '@/core/actions/action';
import oneOrUsing from '@/core/actions/context/consumers/oneOrUsing';
import { ActionContext, ConsumeAdapter, ConsumeDeserializer, ConsumeModel } from '@/core/actions/types';
import { ModelSchemaRaw } from '@/core/model/types';
import { Awaitable } from '@/core/utilities/types';

export default function oneOr<C extends ActionContext, R, D, S extends ModelSchemaRaw, I, DD>(
  defaultData: (realData: D, context: C) => Awaitable<DD>,
) {
  return async (
    action: Action<C & ConsumeAdapter<R, D> & ConsumeDeserializer<D> & ConsumeModel<S, I>>,
  ) => action.run(oneOrUsing((d) => d, defaultData));
}
