import { ActionContext, ModelInstance, ModelRelation } from '@/core';
import { JsonSerializer } from '@/json';
import { DataWrapper, JsonRestNewResource, JsonRestSerializerConfig } from '@/jsonrest/types';
import { assignConfig } from '@/utilities';
import { Dictionary } from '@/utilities/types';

export default class JsonRestSerializer extends JsonSerializer<Dictionary> {
  private dataWrapper: DataWrapper | null = null;

  public constructor(config?: JsonRestSerializerConfig) {
    super(config);

    this.configure(config);
  }

  public configure(config?: JsonRestSerializerConfig) {
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
    resource: JsonRestNewResource,
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
