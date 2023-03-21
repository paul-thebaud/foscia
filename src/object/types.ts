import { ModelId } from '@/core';
import { Optional } from '@/utilities';

export type ObjectOptionalIdentifier = {
  type?: string;
  id?: ModelId;
  lid?: ModelId;
};

export type ObjectNormalizedIdentifier = {
  type: string;
  id?: ModelId;
  lid?: ModelId;
};

export type ObjectExtractedData<R> = {
  resources: Optional<R[] | R>;
};

export type ObjectDeserializerConfig = {};

export type ObjectSerializerConfig = {};
