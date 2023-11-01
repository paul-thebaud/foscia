import {
  MapRegistryConfig,
  MapRegistryModelsRegistration,
  ModelIdType,
  RefsCacheConfig,
} from '@foscia/core';
import { HttpAdapterConfig } from '@foscia/http';
import { ObjectDeserializerConfig, ObjectSerializerConfig } from '@foscia/object';
import { Awaitable, Dictionary } from '@foscia/utils';

export type RestResourceId = ModelIdType;

export type RestAbstractResource = Dictionary & {
  type?: string;
};

export type RestResource = RestAbstractResource & {
  id: RestResourceId;
};

export type RestNewResource = RestAbstractResource & {
  id?: RestResourceId;
};

export type RestDeserializerConfig = ObjectDeserializerConfig & {
  dataReader?: DataReader;
  dataExtractor?: DataExtractor | null;
};

export type RestSerializerConfig = ObjectSerializerConfig & {
  dataWrapper?: DataWrapper | null;
};

export type DataReader = (response: Response) => Awaitable<any>;
export type DataExtractor = (
  document: any,
) => Awaitable<RestResource[] | RestResource | RestNewResource | null>;
export type DataWrapper = (resource: Dictionary) => Awaitable<Dictionary>;

/**
 * JSON REST action factory blueprint's configuration.
 */
export type JsonRestConfig<Extension extends {}> = {
  extensions?: Extension;
  models?: MapRegistryModelsRegistration;
  cache?: RefsCacheConfig;
  registry?: MapRegistryConfig;
  http?: HttpAdapterConfig;
  serializer?: RestSerializerConfig;
  deserializer?: RestDeserializerConfig;
};
