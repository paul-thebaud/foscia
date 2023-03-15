import { ModelInstance } from '@/core';
import { ObjectDeserializer, ObjectExtractedData } from '@/object';
import { DataExtractor, DataReader, RestDeserializerConfig, RestNewResource } from '@/rest/types';
import { assignConfig } from '@/utilities';

export default class RestDeserializer extends ObjectDeserializer<Response, RestNewResource> {
  private dataReader: DataReader | null = null;

  private dataExtractor: DataExtractor | null = null;

  public constructor(config?: RestDeserializerConfig) {
    super(config);

    this.configure(config);
  }

  public configure(config?: RestDeserializerConfig) {
    assignConfig(this, config);

    return this;
  }

  /**
   * @inheritDoc
   */
  protected async makeDeserializedData(instances: ModelInstance[]) {
    return { instances };
  }

  /**
   * @inheritDoc
   */
  protected async extractData(response: Response): Promise<ObjectExtractedData<RestNewResource>> {
    const document = this.dataReader ? await this.dataReader(response) : response;

    return {
      resources: this.dataExtractor ? await this.dataExtractor(document) : document,
    };
  }

  /**
   * @inheritDoc
   */
  protected async extractOptionalIdentifier(resource: RestNewResource) {
    return resource;
  }

  /**
   * @inheritDoc
   */
  protected async extractPropValue(resource: RestNewResource, serializedKey: string) {
    return resource[serializedKey];
  }
}
