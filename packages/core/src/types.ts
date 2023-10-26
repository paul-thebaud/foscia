import type { Model, ModelIdType, ModelInstance } from '@foscia/core/model/types';
import type { Awaitable } from '@foscia/utils';

export type RegistryI = {
  modelFor(rawType: string): Promise<Model | null>;
};

export type CacheI = {
  find(type: string, id: ModelIdType): Promise<ModelInstance | null>;
  put(type: string, id: ModelIdType, instance: ModelInstance): Promise<void>;
  forget(type: string, id: ModelIdType): Promise<void>;
  forgetAll(type: string): Promise<void>;
  clear(): Promise<void>;
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
