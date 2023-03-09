import raw from '@/core/actions/context/runners/raw';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import { Action, ActionParsedExtension, ConsumeAdapter } from '@/core/actions/types';

/**
 * Run the action and ignore the content of the result.
 * Adapter errors are not caught and so may be thrown.
 *
 * @category Runners
 */
export default function none<C extends {}>() {
  return async (action: Action<C & ConsumeAdapter>) => {
    await action.run(raw());
  };
}

type NoneRunnerExtension = ActionParsedExtension<{
  none<C extends {}>(
    this: Action<C & ConsumeAdapter>,
  ): Promise<void>;
}>;

none.extension = makeRunnersExtension({ none }) as NoneRunnerExtension;
