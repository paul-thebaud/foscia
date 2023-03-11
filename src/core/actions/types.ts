import { Hookable, HookCallback } from '@/core/hooks/types';
import { Model, ModelId, ModelInstance } from '@/core/model/types';
import { AdapterI, CacheI, DeserializedData, DeserializerI, RegistryI, SerializerI } from '@/core/types';
import { Awaitable, Constructor, DescriptorHolder } from '@/utilities';

export type ActionContext = {
  action?: 'read' | 'create' | 'update' | 'destroy' | string;
  modelPath?: string;
  relationPath?: string;
  id?: ModelId;
  include?: string[];
  data?: unknown;
  [K: string]: unknown;
};

export type ActionHooksDefinition<C extends ActionContext = any> = {
  preparing: HookCallback<undefined>;
  running: HookCallback<{ context: C; }>;
  success: HookCallback<{ context: C; result: unknown; }>;
  error: HookCallback<{ context: C; error: unknown; }>;
  finally: HookCallback<{ context: C; }>;
};

export type Action<Context extends {} = {}, Extension extends {} = {}> =
  & {
    useContext(): Promise<Context>;
    updateContext<NewContext extends {}>(
      newContext: NewContext,
    ): Action<NewContext, Extension>;
    use<NewContext extends {} = Context>(
      enhancer: ContextEnhancer<Context, NewContext>,
    ): Action<NewContext, Extension>;
    run<Result>(
      runner: ContextRunner<Context, Result>,
    ): Promise<Awaited<Result>>;
  }
  & Hookable<ActionHooksDefinition<Context>>
  & ExtendedAction<Extension>;

export type ActionClass<Context extends {} = {}, Extension extends {} = {}> = {
  extends<NewExtension extends {} = {}>(
    newExtensions?: NewExtension,
  ): ActionClass<Context, Extension & NewExtension>;
} & Constructor<Action<Context, Extension>>;

export type ActionParsedExtension<E extends {} = {}> = {
  [K in keyof E]: E[K] extends DescriptorHolder<any> ? E[K] : DescriptorHolder<E[K]>;
};

export type ExtendedAction<E extends {}> = {
  [K in keyof E]: E[K] extends DescriptorHolder<infer T> ? T : E[K];
};

export type ContextEnhancer<PC extends ActionContext, NC extends ActionContext> = (
  action: Action<PC>,
) => Awaitable<Action<NC> | void>;

export type ContextRunner<C extends ActionContext, R> = (
  action: Action<C>,
) => R;

export type ConsumeModel<M extends Model = Model> = {
  model: M;
};

export type ConsumeInstance<I extends ModelInstance = ModelInstance> = {
  instance: I;
};

export type ConsumeId = {
  id?: ModelId;
};

export type ConsumeInclude = {
  include?: string[];
};

export type ConsumeCache = { cache: CacheI; };

export type ConsumeRegistry = { registry: RegistryI; };

export type ConsumeAdapter<AdapterData = unknown> = {
  adapter: AdapterI<AdapterData>;
};

export type ConsumeDeserializer<
  AdapterData = unknown,
  Data extends DeserializedData = DeserializedData,
> = {
  deserializer: DeserializerI<AdapterData, Data>;
};

export type ConsumeSerializer<Data = unknown> = {
  serializer: SerializerI<Data>;
};
