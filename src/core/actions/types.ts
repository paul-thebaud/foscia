import type Action from '@/core/actions/action';
import { HookCallback } from '@/core/hooks/types';
import { Model, ModelId, ModelInstance } from '@/core/model/types';
import { AdapterI, CacheI, DeserializedData, DeserializerI, RegistryI, SerializerI } from '@/core/types';
import { Awaitable } from '@/utilities';

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

export type ActionExtension<
  N extends string = string,
  M extends (...args: any[]) => any = (...args: any[]) => any,
> = {
  name: N;
  method: M;
};

export type InferActionWithExtensions<E extends readonly ActionExtension[]> = {
  [I in Extract<keyof E, `${number}`> as E[I]['name']]: E[I]['method'];
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
