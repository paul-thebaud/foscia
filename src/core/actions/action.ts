import type {
  ActionContext,
  ActionExtension,
  ActionHooksDefinition,
  ContextEnhancer,
  ContextRunner,
  InferActionWithExtensions,
} from '@/core/actions/types';
import runHook from '@/core/hooks/runHook';
import { HooksRegistrar } from '@/core/hooks/types';
import withoutHooks from '@/core/hooks/withoutHooks';
import { sequentialTransform } from '@/utilities';

export default class Action<Context extends ActionContext> {
  public $hooks: HooksRegistrar<ActionHooksDefinition> | null;

  private $enhancementsQueue: ContextEnhancer<any, any>[];

  private $context: Context;

  public constructor() {
    this.$enhancementsQueue = [];
    this.$context = {} as Context;
    this.$hooks = {};
  }

  public extends<E extends readonly ActionExtension[]>(extensions: E & ThisType<this>) {
    extensions.forEach((extension) => {
      Object.defineProperty(this, extension.name, {
        value: extension.method,
      });
    });

    return this as this & InferActionWithExtensions<E>;
  }

  public get context() {
    return (async () => {
      await this.dequeueEnhancements();

      return this.$context;
    })();
  }

  public updateContext<PrevAction, NewContext extends ActionContext>(
    this: Action<Context> & PrevAction,
    newContext: NewContext,
  ): Action<NewContext> & PrevAction {
    this.$context = newContext as any;

    return this as any;
  }

  public use<PrevAction, NewContext extends ActionContext = Context>(
    this: Action<Context> & PrevAction,
    enhancer: ContextEnhancer<Context, NewContext>,
  ): Action<NewContext> & PrevAction {
    this.$enhancementsQueue.push(enhancer);

    return this as any;
  }

  public async run<Result>(
    runner: ContextRunner<Context, Result>,
  ): Promise<Awaited<Result>> {
    await runHook(this, 'preparing', undefined);

    const context = await this.context;

    await runHook(this, 'running', { context });

    try {
      // Context runner might use other context runners, so we must disable
      // hooks at this point to avoid duplicated hooks runs.
      const result = await withoutHooks(this, () => runner(this));

      await runHook(this, 'success', { context, result });

      return result;
    } catch (error) {
      await runHook(this, 'error', { context, error });

      throw error;
    } finally {
      await runHook(this, 'finally', { context });
    }
  }

  private async dequeueEnhancements() {
    const enhancements = this.$enhancementsQueue.map((e) => async () => {
      await e(this);

      // Any enhancement might push other enhancement in the queue,
      // so we must process those too.
      await this.dequeueEnhancements();
    });

    this.$enhancementsQueue = [];

    await sequentialTransform(enhancements);
  }
}
