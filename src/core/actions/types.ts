import type Action from '@/core/actions/action';
import { HookCallback } from '@/core/hooks/types';
import { Model, ModelId, ModelInstance } from '@/core/model/types';
import { AdapterI, CacheI, DeserializedData, DeserializerI, RegistryI, SerializerI } from '@/core/types';
import { Awaitable, DescriptorHolder } from '@/utilities';

export type ActionContext = {
  action?: 'READ' | 'CREATE' | 'UPDATE' | 'DESTROY';
  type?: string;
  id?: ModelId;
  relation?: string;
  includes?: string[];
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

export type ConsumableContext<C extends ActionContext> = Action<C> | C;

export type ConsumeModel<M extends Model = Model> = {
  model: M;
};

export type ConsumeInstance<I extends ModelInstance = ModelInstance> = {
  instance: I;
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
