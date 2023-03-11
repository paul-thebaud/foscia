import { ModelInstance } from '@/core';
import { JsonDeserializer, JsonExtractedData } from '@/json';
import { DataExtractor, JsonRestDeserializerConfig, JsonRestNewResource } from '@/jsonrest/types';
import { assignConfig } from '@/utilities';

export default class JsonRestDeserializer extends JsonDeserializer<Response, JsonRestNewResource> {
  private dataExtractor: DataExtractor | null = null;

  public constructor(config?: JsonRestDeserializerConfig) {
    super(config);

    this.configure(config);
  }

  public configure(config?: JsonRestDeserializerConfig) {
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
  protected async extractData(response: Response): Promise<JsonExtractedData<JsonRestNewResource>> {
    if (response.status === 204) {
      return { resources: null };
    }

    const document = await response.json();

    return {
      resources: this.dataExtractor ? await this.dataExtractor(document) : document,
    };
  }

  /**
   * @inheritDoc
   */
  protected async extractOptionalIdentifier(resource: JsonRestNewResource) {
    return resource;
  }

  /**
   * @inheritDoc
   */
  protected async extractPropValue(resource: JsonRestNewResource, serializedKey: string) {
    return resource[serializedKey];
  }
}
