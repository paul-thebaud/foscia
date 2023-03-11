import { ModelId } from '@/core';
import { Optional } from '@/utilities';

export type JsonOptionalIdentifier = {
  type?: string;
  id?: ModelId;
  lid?: ModelId;
};

export type JsonNormalizedIdentifier = {
  type: string;
  id?: ModelId;
  lid?: ModelId;
};

export type JsonExtractedData<R> = {
  resources: Optional<R[] | R>;
};

export type JsonDeserializerConfig = {
  attributeKeyTransformer?: KeyTransformer | null;
  relationKeyTransformer?: KeyTransformer | null;
};

export type JsonSerializerConfig = {
  attributeKeyTransformer?: KeyTransformer | null;
  relationKeyTransformer?: KeyTransformer | null;
};

export type KeyTransformer = (key: string) => string;
