import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import { Action, ActionParsedExtension, ContextRunner } from '@/core/actions/types';
import { Awaitable } from '@/utilities';

type CatchCallback<C extends {}, CD> = (
  error: unknown,
) => Awaitable<ContextRunner<C, Awaitable<CD>> | boolean>;

/**
 * Run given runner and catch errors using catchCallback.
 * If catchCallback is omitted, will return null on error.
 * If catchCallback returns a function, will run it as an action's runner.
 * Else, will return null on error only if callback for error is falsy.
 *
 * @param runner
 * @param catchCallback
 *
 * @category Runners
 */
export default function catchWith<C extends {}, RD, CD = null>(
  runner: ContextRunner<C, Awaitable<RD>>,
  catchCallback?: CatchCallback<C, CD>,
) {
  return async (action: Action<C>): Promise<RD | CD> => {
    try {
      return await action.run(runner);
    } catch (error) {
      const catchRunner = await (catchCallback ?? (() => true))(error);
      if (typeof catchRunner === 'function') {
        return action.run(catchRunner);
      }

      if (!catchRunner) {
        throw error;
      }

      return null as any;
    }
  };
}

type RunnerExtension = ActionParsedExtension<{
  catchWith<C extends {}, RD, CD = null>(
    this: Action<C>,
    runner: ContextRunner<C, Awaitable<RD>>,
    catchCallback?: CatchCallback<C, CD>,
  ): Promise<Awaited<RD> | Awaited<CD>>;
}>;

catchWith.extension = makeRunnersExtension({ catchWith }) as RunnerExtension;
