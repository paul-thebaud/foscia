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

export type ObjectDeserializerConfig = {
  attributeKeyTransformer?: KeyTransformer | null;
  relationKeyTransformer?: KeyTransformer | null;
};

export type ObjectSerializerConfig = {
  attributeKeyTransformer?: KeyTransformer | null;
  relationKeyTransformer?: KeyTransformer | null;
};

export type KeyTransformer = (key: string) => string;
