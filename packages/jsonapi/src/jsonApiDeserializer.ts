import { DeserializedData, DeserializerError, ModelIdType, ModelInstance } from '@foscia/core';
import {
  JsonApiDocument,
  JsonApiNewResource,
  JsonApiResource,
  JsonApiResourceIdentifier,
} from '@foscia/jsonapi/types';
import { ObjectDeserializer, ObjectExtractedData } from '@foscia/object';
import { IdentifiersMap, wrap } from '@foscia/utils';

/**
 * Extracted data from a JSON:API backend Response object.
 */
export type JsonApiExtractedData = ObjectExtractedData<JsonApiNewResource> & {
  included: IdentifiersMap<string, ModelIdType, JsonApiResource>;
  document: JsonApiDocument;
  response: Response;
};

/**
 * Deserialized data from a JSON:API backend Response object.
 */
export type JsonApiDeserializedData<I extends ModelInstance = ModelInstance> =
  & DeserializedData<I>
  & { document: JsonApiDocument; response: Response; };

/**
 * Deserializer implementation for JSON:API.
 */
export default class JsonApiDeserializer extends ObjectDeserializer
  <Response, JsonApiNewResource, JsonApiExtractedData, JsonApiDeserializedData> {
  /**
   * @inheritDoc
   */
  protected async makeDeserializedData(
    instances: ModelInstance[],
    extractedData: JsonApiExtractedData,
  ) {
    return {
      instances,
      document: extractedData.document,
      response: extractedData.response,
    };
  }

  /**
   * @inheritDoc
   */
  protected async extractData(response: Response) {
    const document: JsonApiDocument = response.status === 204 ? {} : await response.json();

    const included = new IdentifiersMap<string, ModelIdType, JsonApiResource>();
    document.included?.map((r) => included.set(r.type, r.id, r));

    return {
      resources: document.data,
      included,
      document,
      response,
    };
  }

  /**
   * @inheritDoc
   */
  protected async extractOptionalIdentifier(resource: JsonApiNewResource) {
    return resource;
  }

  /**
   * @inheritDoc
   */
  protected async extractAttributeValue(
    _extractedData: JsonApiExtractedData,
    resource: JsonApiNewResource,
    serializedKey: string,
  ) {
    return resource.attributes?.[serializedKey];
  }

  /**
   * @inheritDoc
   */
  protected async extractRelationValue(
    extractedData: JsonApiExtractedData,
    resource: JsonApiNewResource,
    serializedKey: string,
  ) {
    const relationRef = resource.relationships?.[serializedKey]?.data;
    if (Array.isArray(relationRef)) {
      return relationRef.map((r) => this.extractIncluded(extractedData, r));
    }

    if (relationRef) {
      return this.extractIncluded(extractedData, relationRef);
    }

    return relationRef;
  }

  /**
   * Extract an included JSON:API resource from extracted data.
   *
   * @param extractedData
   * @param identifier
   */
  protected extractIncluded(
    extractedData: JsonApiExtractedData,
    identifier: JsonApiResourceIdentifier,
  ) {
    const includedResource = extractedData.included.get(identifier.type, identifier.id);
    if (includedResource) {
      return includedResource;
    }

    const rootResource = wrap(extractedData.resources).find(
      (r) => (r.type === identifier.type && r.id === identifier.id),
    );
    if (rootResource) {
      return rootResource;
    }

    throw new DeserializerError(
      `Could not find included resource with type \`${identifier.type}\` and ID \`${identifier.id}\`. Your document seems malformed.`,
    );
  }
}
