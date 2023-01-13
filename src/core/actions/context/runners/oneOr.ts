import Action from '@/core/actions/action';
import oneUsing from '@/core/actions/context/runners/oneUsing';
import { ActionContext, ConsumeAdapter, ConsumeDeserializer, ConsumeModel, ContextRunner } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function oneOr<
  C extends ActionContext,
  M extends Model,
  AD,
  RD,
>(nilRunner: ContextRunner<C, RD>) {
  return async (
    action: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
  ) => (
    await action.run(oneUsing(({ instance }) => instance)) ?? await action.run(nilRunner)
  );
}
