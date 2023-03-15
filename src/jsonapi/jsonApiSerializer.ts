import { ModelId, ModelInstance, ModelRelation } from '@/core';
import { ObjectSerializer } from '@/object';
import { JsonApiDocument, JsonApiNewResource } from '@/jsonapi/types';
import { isNil, Optional } from '@/utilities';

/**
 * Serializer implementation for JSON:API.
 */
export default class JsonApiSerializer extends ObjectSerializer<JsonApiDocument> {
  /**
   * @inheritDoc
   */
  protected async makeResource(instance: ModelInstance) {
    return {
      data: {
        ...this.serializeInstanceIdentifier(instance),
        attributes: {},
        relationships: {},
      },
    };
  }

  /**
   * @inheritDoc
   */
  protected async hydrateAttributeInResource(
    resource: JsonApiDocument,
    serializedKey: string,
    serializedValue: unknown,
  ) {
    Object.assign((resource.data as JsonApiNewResource)!.attributes!, {
      [serializedKey]: serializedValue,
    });
  }

  /**
   * @inheritDoc
   */
  protected async hydrateRelationInResource(
    resource: JsonApiDocument,
    serializedKey: string,
    serializedValue: unknown,
  ) {
    Object.assign((resource.data as JsonApiNewResource)!.relationships!, {
      [serializedKey]: { data: serializedValue },
    });
  }

  /**
   * @inheritDoc
   */
  protected async serializeRelatedInstance(
    _instance: ModelInstance,
    _key: string,
    _def: ModelRelation,
    related: ModelInstance,
  ) {
    return this.serializeInstanceIdentifier(related);
  }

  /**
   * Serialize an instance unique identifier object.
   *
   * @param instance
   */
  protected serializeInstanceIdentifier(instance: ModelInstance) {
    return {
      type: instance.$model.$config.type,
      id: this.serializeId(instance.id),
      lid: this.serializeId(instance.lid),
    };
  }

  /**
   * Serialize an instance's ID.
   *
   * @param id
   */
  protected serializeId(id?: Optional<ModelId>) {
    return isNil(id) ? undefined : String(id);
  }
}
