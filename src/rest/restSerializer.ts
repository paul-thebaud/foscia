import { ActionContext, ModelInstance, ModelRelation } from '@/core';
import { ObjectSerializer } from '@/object';
import { DataWrapper, RestNewResource, RestSerializerConfig } from '@/rest/types';
import { assignConfig } from '@/utilities';
import { Dictionary } from '@/utilities/types';

export default class RestSerializer extends ObjectSerializer<Dictionary> {
  private dataWrapper: DataWrapper | null = null;

  public constructor(config?: RestSerializerConfig) {
    super(config);

    this.configure(config);
  }

  public configure(config?: RestSerializerConfig) {
    assignConfig(this, config);

    return this;
  }

  public async serialize(instance: ModelInstance, context: ActionContext) {
    const resource = await super.serialize(instance, context);

    return this.dataWrapper ? this.dataWrapper(resource) : resource;
  }

  /**
   * @inheritDoc
   */
  protected async makeResource(instance: ModelInstance) {
    return { id: instance.id };
  }

  /**
   * @inheritDoc
   */
  protected async hydratePropInResource(
    resource: RestNewResource,
    serializedKey: string,
    serializedValue: unknown,
  ) {
    Object.assign(resource, {
      [serializedKey]: serializedValue,
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
    // TODO Object or ID? Type?
    return related.id;
  }
}
