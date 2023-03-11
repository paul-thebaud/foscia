import { ModelId } from '@/core';
import { JsonDeserializerConfig, JsonSerializerConfig } from '@/json';
import { Awaitable, Dictionary } from '@/utilities';

export type JsonRestResourceId = ModelId;

export type JsonRestAbstractResource = Dictionary & {
  type?: string;
};

export type JsonRestResource = JsonRestAbstractResource & {
  id: JsonRestResourceId;
};

export type JsonRestNewResource = JsonRestAbstractResource & {
  id?: JsonRestResourceId;
};

export type JsonRestDeserializerConfig = JsonDeserializerConfig & {
  dataExtractor?: DataExtractor | null;
};

export type JsonRestSerializerConfig = JsonSerializerConfig & {
  dataWrapper?: DataWrapper | null;
};

export type DataExtractor = (
  document: any,
) => Awaitable<JsonRestResource[] | JsonRestResource | JsonRestNewResource | null>;

export type DataWrapper = (resource: Dictionary) => Awaitable<Dictionary>;
