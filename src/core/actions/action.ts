import type {
  ActionContext,
  ActionHooksDefinition,
  ContextEnhancer,
  ContextRunner,
  ExtendedAction,
} from '@/core/actions/types';
import runHook from '@/core/hooks/runHook';
import { HooksRegistrar } from '@/core/hooks/types';
import withoutHooks from '@/core/hooks/withoutHooks';
import { eachDescriptors, sequentialTransform } from '@/utilities';

export default class Action<Context extends ActionContext> {
  public $hooks: HooksRegistrar<ActionHooksDefinition> | null;

  private $enhancementsQueue: ContextEnhancer<any, any>[];

  private $context: Context;

  public constructor() {
    this.$enhancementsQueue = [];
    this.$context = {} as Context;
    this.$hooks = {};
  }

  // TODO Static.
  public extends<Extension extends {}>(extension: Extension & ThisType<this>) {
    eachDescriptors(extension, (key, descriptor) => {
      Object.defineProperty(this, key, descriptor);
    });

    return this as this & ExtendedAction<Extension>;
  }

  public async computeContext() {
    await this.dequeueEnhancements();

    return this.$context;
  }

  public updateContext<PrevAction, NewContext extends ActionContext = {}>(
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

    const context = await this.computeContext();

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
