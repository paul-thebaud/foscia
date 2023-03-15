import { ModelId } from '@/core';
import { ObjectDeserializerConfig, ObjectSerializerConfig } from '@/object';
import { Awaitable, Dictionary } from '@/utilities';

export type RestResourceId = ModelId;

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
