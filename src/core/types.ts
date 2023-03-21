import type { Model, ModelId, ModelInstance } from '@/core/model/types';
import type { Awaitable } from '@/utilities';

export type RegistryI = {
  modelFor(rawType: string): Promise<Model | null>;
};

export type CacheI = {
  find(type: string, id: ModelId): Promise<ModelInstance | null>;
  put(type: string, id: ModelId, instance: ModelInstance): Promise<void>;
  forget(type: string, id: ModelId): Promise<void>;
  forgetAll(type: string): Promise<void>;
};

export type AdapterI<Data> = {
  execute(context: {}): Awaitable<Data>;
  isNotFound(error: unknown): Awaitable<boolean>;
};

export type SerializerI<Data> = {
  serialize(instance: ModelInstance, context: {}): Awaitable<Data>;
};

export type DeserializedData<I extends ModelInstance = ModelInstance> = {
  instances: I[];
};

export type DeserializerI<AdapterData, Data extends DeserializedData> = {
  deserialize(data: AdapterData, context: {}): Awaitable<Data>;
};
