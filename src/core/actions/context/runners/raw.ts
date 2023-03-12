import executeContextThroughAdapter from '@/core/actions/context/utilities/executeContextThroughAdapter';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import { Action, ActionParsedExtension, ConsumeAdapter } from '@/core/actions/types';
import { Awaitable } from '@/utilities';

/**
 * Run the action and retrieve the raw adapter's data.
 *
 * @category Runners
 */
export default function raw<C extends {}, AD, ND = AD>(
  transform?: (data: AD) => Awaitable<ND>,
) {
  return async (action: Action<C & ConsumeAdapter<AD>>) => {
    const data = await executeContextThroughAdapter(
      await action.useContext(),
    );

    return (transform ? transform(data) : data) as Awaitable<ND>;
  };
}

type RunnerExtension = ActionParsedExtension<{
  raw<C extends {}, AD>(
    this: Action<C & ConsumeAdapter<AD>>,
  ): Promise<AD>;
}>;

raw.extension = makeRunnersExtension({ raw }) as RunnerExtension;
