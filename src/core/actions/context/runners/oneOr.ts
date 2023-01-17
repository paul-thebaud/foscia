import oneUsing from '@/core/actions/context/runners/oneUsing';
import { Action, ConsumeAdapter, ConsumeDeserializer, ConsumeModel, ContextRunner } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function oneOr<C extends {}, M extends Model, AD, RD>(
  nilRunner: ContextRunner<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>, RD>,
) {
  return async (
    action: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
  ) => (
    await action.run(oneUsing(({ instance }) => instance)) ?? await action.run(nilRunner)
  );
}
