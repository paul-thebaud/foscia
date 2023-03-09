import raw from '@/core/actions/context/runners/raw';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import { Action, ActionParsedExtension, ConsumeAdapter } from '@/core/actions/types';
import { Awaitable } from '@/utilities';

/**
 * Run the action and retrieve the raw adapter's data.
 * Transform the returned result using given callback.
 *
 * @param transform
 *
 * @category Runners
 */
export default function rawUsing<C extends {}, AD, ND>(transform: (data: AD) => Awaitable<ND>) {
  return async (
    action: Action<C & ConsumeAdapter<AD>>,
  ) => transform(await action.run(raw()));
}

type RawUsingRunnerExtension = ActionParsedExtension<{
  rawUsing<C extends {}, AD, ND>(
    this: Action<C & ConsumeAdapter<AD>>,
    transform: (data: AD) => Awaitable<ND>,
  ): Promise<Awaited<ND>>;
}>;

rawUsing.extension = makeRunnersExtension({ rawUsing }) as RawUsingRunnerExtension;
