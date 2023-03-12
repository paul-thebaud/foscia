import { ActionClass, ActionHooksDefinition, ContextEnhancer, ContextRunner } from '@/core/actions/types';
import runHook from '@/core/hooks/runHook';
import { HooksRegistrar } from '@/core/hooks/types';
import withoutHooks from '@/core/hooks/withoutHooks';
import { Dictionary, eachDescriptors, sequentialTransform } from '@/utilities';

export default function makeAction<Extension extends {} = {}>(extensions?: Extension) {
  class QueuedAction {
    public $hooks: HooksRegistrar<ActionHooksDefinition> | null;

    private $enhancementsQueue: ContextEnhancer<any, any>[];

    private $context: Dictionary;

    public static extends(newExtensions?: Dictionary) {
      eachDescriptors(newExtensions ?? {}, (key, descriptor) => {
        Object.defineProperty(this.prototype, key, descriptor);
      });

      return this;
    }

    public constructor() {
      this.$enhancementsQueue = [];
      this.$context = {};
      this.$hooks = {};
    }

    public async useContext() {
      await this.dequeueEnhancements();

      return this.$context;
    }

    public updateContext(newContext: Dictionary) {
      this.$context = newContext;

      return this;
    }

    public use(enhancer: ContextEnhancer<any, any>) {
      this.$enhancementsQueue.push(enhancer);

      return this;
    }

    public async run(runner: ContextRunner<any, any>) {
      await runHook(this, 'preparing', undefined);

      const context = await this.useContext();

      await runHook(this, 'running', { context });

      try {
        // Context runner might use other context runners, so we must disable
        // hooks at this point to avoid duplicated hooks runs.
        const result = await withoutHooks(this, () => runner(this as any));

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
        await e(this as any);

        // Any enhancement might push other enhancement in the queue,
        // so we must process those too.
        await this.dequeueEnhancements();
      });

      this.$enhancementsQueue = [];

      await sequentialTransform(enhancements);
    }
  }

  return QueuedAction.extends(extensions) as ActionClass<{}, Extension>;
}