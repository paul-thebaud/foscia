import { ModelIdType } from '@/core';
import { Optional } from '@/utilities';

export type ObjectOptionalIdentifier = {
  type?: string;
  id?: ModelIdType;
  lid?: ModelIdType;
};

export type ObjectNormalizedIdentifier = {
  type: string;
  id?: ModelIdType;
  lid?: ModelIdType;
};

export type ObjectExtractedData<R> = {
  resources: Optional<R[] | R>;
};

export type ObjectDeserializerConfig = {};

export type ObjectSerializerConfig = {};
