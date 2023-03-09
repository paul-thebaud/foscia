import executeContextThroughAdapter from '@/core/actions/context/utilities/executeContextThroughAdapter';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import { Action, ActionParsedExtension, ConsumeAdapter } from '@/core/actions/types';

/**
 * Run the action and retrieve the raw adapter's data.
 *
 * @category Runners
 */
export default function raw<C extends {}, AD>() {
  return async (action: Action<C & ConsumeAdapter<AD>>) => executeContextThroughAdapter(
    await action.useContext(),
  );
}

type RawRunnerExtension = ActionParsedExtension<{
  raw<C extends {}, AD>(
    this: Action<C & ConsumeAdapter<AD>>,
  ): Promise<AD>;
}>;

raw.extension = makeRunnersExtension({ raw }) as RawRunnerExtension;
