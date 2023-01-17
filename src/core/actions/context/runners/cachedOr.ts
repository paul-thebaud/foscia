import cachedUsing from '@/core/actions/context/runners/cachedUsing';
import { Action, ConsumeCache, ConsumeModel, ContextRunner } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function cachedOr<C extends {}, M extends Model, RD>(
  nilRunner: ContextRunner<C & ConsumeCache & ConsumeModel<M>, RD>,
) {
  return async (action: Action<C & ConsumeCache & ConsumeModel<M>>) => (
    await action.run(cachedUsing(({ instance }) => instance)) ?? await action.run(nilRunner)
  );
}
