/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ActionContext,
  ConsumeCache,
  ConsumeInstance,
  ConsumeModel,
  ConsumeRegistry,
  ConsumeRelation,
  DeserializedData,
  DeserializerError,
  DeserializerI,
  eachAttributes,
  eachRelations,
  ModelAttribute,
  ModelId,
  ModelInstance,
  ModelProp,
  ModelRelation,
  runHook,
  syncOriginal,
  useTransform,
} from '@/core';
import normalizeKey from '@/object/utilities/normalizeKey';
import {
  ObjectDeserializerConfig,
  ObjectExtractedData,
  ObjectNormalizedIdentifier,
  ObjectOptionalIdentifier,
  KeyTransformer,
} from '@/object/types';
import { assignConfig, IdentifiersMap, isNil, isNone, Optional, wrap } from '@/utilities';

export default abstract class ObjectDeserializer<
  AdapterData,
  Resource,
  Extract extends ObjectExtractedData<Resource> = ObjectExtractedData<Resource>,
  Data extends DeserializedData = DeserializedData,
> implements DeserializerI<AdapterData, Data> {
  protected static NON_IDENTIFIED_LOCAL_ID = '__non_identified__';

  private attributeKeyTransformer: KeyTransformer | null = null;

  private relationKeyTransformer: KeyTransformer | null = null;

  public constructor(config?: ObjectDeserializerConfig) {
    this.configure(config);
  }

  public configure(config?: ObjectDeserializerConfig) {
    assignConfig(this, config);

    return this;
  }

  public async deserialize(data: AdapterData, context: ActionContext) {
    const instancesMap = await this.initInstancesMap();

    const extractedData = await this.extractData(data, context);

    await this.prepareInstancesMap(extractedData, instancesMap, context);

    return this.makeDeserializedData(
      await Promise.all(wrap(extractedData.resources).map(
        (resource) => this.deserializeResource(
          extractedData,
          instancesMap,
          resource,
          context,
        ),
      )),
      extractedData,
    );
  }

  protected abstract makeDeserializedData(
    instances: ModelInstance[],
    extractedData: Extract,
  ): Promise<Data>;

  protected abstract extractData(data: AdapterData, context: ActionContext): Promise<Extract>;

  protected abstract extractOptionalIdentifier(
    resource: Resource,
    context: ActionContext,
    parent?: ModelInstance,
    relationKey?: string,
    relation?: ModelRelation,
  ): Promise<ObjectOptionalIdentifier>;

  protected async initInstancesMap() {
    return new IdentifiersMap<string, ModelId, Promise<ModelInstance>>();
  }

  protected async prepareInstancesMap(
    extractedData: Extract,
    instancesMap: IdentifiersMap<string, ModelId, Promise<ModelInstance>>,
    context: ActionContext & Partial<ConsumeInstance>,
  ) {
    // Handle a singular creation context to map a non-identified instance
    // to the single returned resource if available.
    if (context.action === 'create'
      && context.instance
      && !isNone(extractedData.resources)
      && !Array.isArray(extractedData.resources)
    ) {
      const resource = extractedData.resources;
      const identifier = await this.extractIdentifier(resource, context);

      instancesMap.set(
        identifier.type,
        await this.extractLocalId(resource, identifier, context),
        this.deserializeResourceOnInstance(
          extractedData,
          instancesMap,
          resource,
          identifier,
          context.instance,
          context,
        ),
      );
    }
  }

  protected async deserializeResource(
    extractedData: Extract,
    instancesMap: IdentifiersMap<string, ModelId, Promise<ModelInstance>>,
    resource: Resource,
    context: ActionContext,
    parent?: ModelInstance,
    relationKey?: string,
    relation?: ModelRelation,
  ) {
    const identifier = await this.extractIdentifier(
      resource,
      context,
      parent,
      relationKey,
      relation,
    );

    const localId = await this.extractLocalId(resource, identifier, context);
    let instancePromise = instancesMap.get(identifier.type, localId);
    if (instancePromise) {
      return instancePromise;
    }

    instancesMap.set(
      identifier.type,
      localId,
      instancePromise = this.findOrMakeInstance(resource, identifier, context),
    );

    return this.deserializeResourceOnInstance(
      extractedData,
      instancesMap,
      resource,
      identifier,
      await instancePromise,
      context,
    );
  }

  protected async deserializeResourceOnInstance(
    extractedData: Extract,
    instancesMap: IdentifiersMap<string, ModelId, Promise<ModelInstance>>,
    resource: Resource,
    identifier: ObjectNormalizedIdentifier,
    instance: ModelInstance,
    context: ActionContext,
  ) {
    // eslint-disable-next-line no-param-reassign
    instance.id = instance.id ?? identifier.id;
    // eslint-disable-next-line no-param-reassign
    instance.lid = instance.lid ?? identifier.lid;

    await Promise.all(eachAttributes(instance, async (key, def) => {
      const serializedKey = await this.deserializeAttributeKey(instance, key, def, context);
      const rawValue = await this.extractAttributeValue(
        extractedData,
        resource,
        serializedKey,
        context,
      );
      if (await this.shouldDeserializeAttribute(instance, key, def, rawValue, context)) {
        const value = await this.deserializeAttributeValue(
          instance,
          key,
          def,
          rawValue,
          context,
        );

        await this.hydrateAttributeInInstance(instance, key, value);
      }
    }));

    await Promise.all(eachRelations(instance, async (key, def) => {
      const serializedKey = await this.deserializeRelationKey(instance, key, def, context);
      const rawValue = await this.extractRelationValue(
        extractedData,
        resource,
        serializedKey,
        context,
      );
      if (await this.shouldDeserializeRelation(instance, key, def, rawValue, context)) {
        const value = await this.deserializeRelationValue(
          extractedData,
          instancesMap,
          instance,
          key,
          def,
          rawValue,
          context,
        );

        await this.hydrateRelationInInstance(instance, key, value);
      }
    }));

    await this.releaseInstance(resource, instance, context);

    return instance;
  }

  protected async extractIdentifier(
    resource: Resource,
    context: ActionContext & Partial<ConsumeModel> & Partial<ConsumeRelation>,
    parent?: ModelInstance,
    relationKey?: string,
    relation?: ModelRelation,
  ) {
    const identifier = await this.extractOptionalIdentifier(
      resource,
      context,
      parent,
      relationKey,
      relation,
    );

    if (isNil(identifier.type)) {
      if (isNil(relation)) {
        identifier.type = context.relation
          ? context.relation.type
          : context.model?.$config.type;
      } else {
        identifier.type = relation.type;
      }

      if (isNil(identifier.type)) {
        throw new DeserializerError(
          `No alternative found to identify type of resource with ID \`${identifier.id}\`. You should either: target a model, define an explicit relation type or change your deserializer configuration to manage types extraction.`,
        );
      }
    }

    return identifier as ObjectNormalizedIdentifier;
  }

  protected async extractLocalId(
    _resource: Resource,
    identifier: ObjectNormalizedIdentifier,
    _context: ActionContext,
  ) {
    return identifier.id ?? identifier.lid ?? ObjectDeserializer.NON_IDENTIFIED_LOCAL_ID;
  }

  protected async findOrMakeInstance(
    resource: Resource,
    identifier: ObjectNormalizedIdentifier,
    context: ActionContext & Partial<ConsumeCache>,
  ) {
    return await this.findInstance(resource, identifier, context)
      ?? await this.makeInstance(resource, identifier, context);
  }

  protected async findInstance(
    _resource: Resource,
    identifier: ObjectNormalizedIdentifier,
    context: ActionContext & Partial<ConsumeCache & ConsumeInstance>,
  ): Promise<ModelInstance | null> {
    if (context.cache && !isNil(identifier.id)) {
      return context.cache.find(identifier.type, identifier.id);
    }

    if (context.instance && identifier.id === context.instance.id) {
      return context.instance;
    }

    return null;
  }

  protected async makeInstance(
    _resource: Resource,
    identifier: ObjectNormalizedIdentifier,
    context: ActionContext & Partial<ConsumeRegistry & ConsumeModel>,
  ): Promise<ModelInstance> {
    if (context.registry) {
      const ModelClass = await context.registry.modelFor(identifier.type);

      return new ModelClass();
    }

    if (context.model && context.model.$config.type === identifier.type) {
      const ModelClass = context.model;

      return new ModelClass();
    }

    throw new DeserializerError(
      `No alternative found to deserialize resource with type \`${identifier.type}\`. You should use a Registry and register your models using their corresponding types.`,
    );
  }

  protected async releaseInstance(
    resource: Resource,
    instance: ModelInstance,
    context: ActionContext & Partial<ConsumeCache>,
  ) {
    // eslint-disable-next-line no-param-reassign
    instance.exists = true;
    // eslint-disable-next-line no-param-reassign
    instance.$raw = resource;

    syncOriginal(instance);

    await runHook(instance.$model, 'retrieved', instance);

    if (context.cache && !isNil(instance.id)) {
      await context.cache.put(instance.$model.$config.type, instance.id, instance);
    }
  }

  protected extractPropValue(
    _resource: Resource,
    _serializedKey: string,
    _context: ActionContext,
  ): Promise<unknown> {
    throw new DeserializerError(
      'You should either implement `extractPropValue` or `extractAttributeValue` and `extractRelationValue` in your JsonDeserializer implementation.',
    );
  }

  protected extractAttributeValue(
    _extractedData: Extract,
    resource: Resource,
    serializedKey: string,
    context: ActionContext,
  ) {
    return this.extractPropValue(resource, serializedKey, context);
  }

  protected extractRelationValue(
    _extractedData: Extract,
    resource: Resource,
    serializedKey: string,
    context: ActionContext,
  ) {
    return this.extractPropValue(
      resource,
      serializedKey,
      context,
    ) as Promise<Optional<Resource[] | Resource>>;
  }

  protected hydratePropInInstance(
    instance: ModelInstance,
    key: string,
    value: unknown,
  ) {
    // eslint-disable-next-line no-param-reassign
    instance[key] = value;
  }

  protected async hydrateAttributeInInstance(
    instance: ModelInstance,
    key: string,
    value: unknown,
  ) {
    await this.hydratePropInInstance(instance, key, value);
  }

  protected async hydrateRelationInInstance(
    instance: ModelInstance,
    key: string,
    value: unknown,
  ) {
    await this.hydratePropInInstance(instance, key, value);

    // eslint-disable-next-line no-param-reassign
    instance.$loaded[key] = true;
  }

  protected deserializeAttributeKey(
    instance: ModelInstance,
    key: string,
    def: ModelProp,
    _context: ActionContext,
  ) {
    return normalizeKey(instance, key, def, this.attributeKeyTransformer);
  }

  protected deserializeRelationKey(
    instance: ModelInstance,
    key: string,
    def: ModelProp,
    _context: ActionContext,
  ) {
    return normalizeKey(instance, key, def, this.relationKeyTransformer);
  }

  protected shouldDeserializeAttribute(
    instance: ModelInstance,
    key: string,
    def: ModelAttribute,
    rawValue: unknown,
    context: ActionContext,
  ) {
    return this.shouldDeserializeProp(instance, key, def, rawValue, context);
  }

  protected shouldDeserializeRelation(
    instance: ModelInstance,
    key: string,
    def: ModelRelation,
    rawValue: unknown,
    context: ActionContext,
  ) {
    return this.shouldDeserializeProp(instance, key, def, rawValue, context);
  }

  protected async shouldDeserializeProp(
    _instance: ModelInstance,
    _key: string,
    _def: ModelProp,
    rawValue: unknown,
    _context: ActionContext,
  ) {
    return rawValue !== undefined;
  }

  protected async deserializeAttributeValue(
    _instance: ModelInstance,
    _key: string,
    def: ModelAttribute,
    rawValue: unknown,
    _context: ActionContext,
  ) {
    const transform = useTransform(def.transformer, 'deserialize');

    return transform(rawValue);
  }

  protected async deserializeRelationValue(
    extractedData: Extract,
    instancesMap: IdentifiersMap<string, ModelId, Promise<ModelInstance>>,
    instance: ModelInstance,
    key: string,
    def: ModelRelation,
    rawValue: Optional<Resource[] | Resource>,
    context: ActionContext,
  ) {
    if (Array.isArray(rawValue)) {
      return Promise.all(rawValue.map((resource) => this.deserializeResource(
        extractedData,
        instancesMap,
        resource,
        context,
        instance,
        key,
        def,
      )));
    }

    if (rawValue) {
      return this.deserializeResource(
        extractedData,
        instancesMap,
        rawValue,
        context,
        instance,
        key,
        def,
      );
    }

    return rawValue;
  }
}
