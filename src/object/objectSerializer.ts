/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  changed,
  eachAttributes,
  eachRelations,
  ModelAttribute,
  ModelInstance,
  ModelProp,
  ModelRelation,
  normalizeKeys,
  SerializerError,
  SerializerI,
} from '@/core';
import useTransform from '@/core/transformers/useTransform';
import { ObjectSerializerConfig } from '@/object/types';
import { assignConfig } from '@/utilities';

export default abstract class ObjectSerializer<Data> implements SerializerI<Data> {
  public constructor(config?: ObjectSerializerConfig) {
    this.configure(config);
  }

  public configure(config?: ObjectSerializerConfig) {
    assignConfig(this, config);

    return this;
  }

  public async serialize(instance: ModelInstance, context: {}) {
    const resource = await this.makeResource(instance, context);

    await Promise.all(eachAttributes(instance, async (key, def) => {
      const rawValue = instance[key];
      if (await this.shouldSerializeAttribute(instance, key, def, rawValue, context)) {
        const serializedKey = await this.serializeAttributeKey(instance, key, def, context);
        const serializedValue = await this.serializeAttributeValue(
          instance,
          key,
          def,
          rawValue,
          context,
        );

        await this.hydrateAttributeInResource(resource, serializedKey, serializedValue);
      }
    }));

    await Promise.all(eachRelations(instance, async (key, def) => {
      const rawValue = instance[key];
      if (await this.shouldSerializeRelation(instance, key, def, rawValue, context)) {
        const serializedKey = await this.serializeRelationKey(instance, key, def, context);
        const serializedValue = await this.serializeRelationValue(
          instance,
          key,
          def,
          rawValue,
          context,
        );

        await this.hydrateRelationInResource(resource, serializedKey, serializedValue);
      }
    }));

    return resource;
  }

  protected abstract makeResource(instance: ModelInstance, context: {}): Promise<Data>;

  protected abstract serializeRelatedInstance(
    instance: ModelInstance,
    key: string,
    def: ModelRelation,
    related: ModelInstance,
    context: {},
  ): Promise<unknown>;

  protected hydratePropInResource(
    _resource: Data,
    _serializedKey: string,
    _serializedValue: unknown,
  ): Promise<void> {
    throw new SerializerError(
      'You should either implement `hydratePropInResource` or `hydrateAttributeInResource` and `hydrateRelationInResource` in your JsonSerializer implementation.',
    );
  }

  protected async hydrateAttributeInResource(
    resource: Data,
    serializedKey: string,
    serializedValue: unknown,
  ) {
    await this.hydratePropInResource(resource, serializedKey, serializedValue);
  }

  protected async hydrateRelationInResource(
    resource: Data,
    serializedKey: string,
    serializedValue: unknown,
  ) {
    await this.hydratePropInResource(resource, serializedKey, serializedValue);
  }

  protected async serializeAttributeKey(
    instance: ModelInstance,
    key: string,
    _def: ModelAttribute,
    context: {},
  ) {
    return (await normalizeKeys(context, instance.$model, [key]))[0];
  }

  protected async serializeRelationKey(
    instance: ModelInstance,
    key: string,
    _def: ModelRelation,
    context: {},
  ) {
    return (await normalizeKeys(context, instance.$model, [key]))[0];
  }

  protected shouldSerializeAttribute(
    instance: ModelInstance,
    key: string,
    def: ModelAttribute,
    rawValue: unknown,
    context: {},
  ) {
    return this.shouldSerializeProp(instance, key, def, rawValue, context);
  }

  protected shouldSerializeRelation(
    instance: ModelInstance,
    key: string,
    def: ModelRelation,
    rawValue: unknown,
    context: {},
  ) {
    return this.shouldSerializeProp(instance, key, def, rawValue, context);
  }

  protected async shouldSerializeProp(
    instance: ModelInstance,
    key: string,
    def: ModelProp,
    rawValue: unknown,
    _context: {},
  ) {
    return !def.readOnly
      && rawValue !== undefined
      && changed(instance, key);
  }

  protected async serializeAttributeValue(
    _instance: ModelInstance,
    _key: string,
    def: ModelAttribute,
    rawValue: unknown,
    _context: {},
  ) {
    const transform = useTransform(def.transformer, 'serialize');

    return transform(rawValue);
  }

  protected async serializeRelationValue(
    instance: ModelInstance,
    key: string,
    def: ModelRelation,
    rawValue: unknown,
    context: {},
  ) {
    const serializeRelatedInstance = (related: ModelInstance) => this.serializeRelatedInstance(
      instance,
      key,
      def,
      related,
      context,
    );
    if (Array.isArray(rawValue)) {
      return Promise.all(rawValue.map(serializeRelatedInstance));
    }

    if (rawValue) {
      return serializeRelatedInstance(rawValue as ModelInstance);
    }

    return rawValue;
  }
}
