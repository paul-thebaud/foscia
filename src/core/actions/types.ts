import { Hookable, HookCallback } from '@/core/hooks/types';
import { Model, ModelId, ModelInstance, ModelRelation, ModelRelationRaw } from '@/core/model/types';
import {
  AdapterI,
  CacheI,
  DeserializedData,
  DeserializerI,
  RegistryI,
  SerializerI,
} from '@/core/types';
import { Awaitable, Constructor, DescriptorHolder } from '@/utilities';

export type ActionHooksDefinition<C extends {} = any> = {
  preparing: HookCallback<undefined>;
  running: HookCallback<{ context: C; runner: Function; }>;
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

export type ContextEnhancer<C extends {}, NC extends {}> = (
  action: Action<C>,
) => Awaitable<Action<NC> | void>;

export type ContextRunner<C extends {}, R> = (
  action: Action<C>,
) => R;

export type InferConsumedInstance<C extends {}> =
  C extends { relation: ModelRelationRaw<Array<infer I>> }
    ? I extends ModelInstance ? I : never
    : C extends { relation: ModelRelationRaw<infer I> }
      ? I extends ModelInstance ? I : never
      : C extends { model: Constructor<infer I> }
        ? I extends ModelInstance ? I : never : never;

export type ConsumeAction = {
  action: 'read' | 'create' | 'update' | 'destroy' | string;
};

export type ConsumeData = {
  data: unknown;
};

export type ConsumeModel<M extends Model = Model> = {
  model: M;
};

export type ConsumeModelPath = {
  modelPath: string;
};

export type ConsumeInstance<I extends ModelInstance = ModelInstance> = {
  instance: I;
};

export type ConsumeRelation = {
  relation: ModelRelation;
};

export type ConsumeRelationPath = {
  relationPath: string;
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
