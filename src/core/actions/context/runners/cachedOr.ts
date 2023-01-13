import Action from '@/core/actions/action';
import cachedUsing from '@/core/actions/context/runners/cachedUsing';
import { ActionContext, ConsumeCache, ConsumeModel, ContextRunner } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function cachedOr<C extends ActionContext, M extends Model, RD>(
  nilRunner: ContextRunner<C, RD>,
) {
  return async (action: Action<C & ConsumeCache & ConsumeModel<M>>) => (
    await action.run(cachedUsing(({ instance }) => instance)) ?? await action.run(nilRunner)
  );
}
