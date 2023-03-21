import logger from '@/core/logger/logger';
import isModel from '@/core/model/guards/isModel';
import { Model } from '@/core/model/types';
import normalize from '@/core/normalization/normalize';
import { Normalizer } from '@/core/normalization/types';
import { MapRegistryConfig, ModelPreparator, ModelResolver } from '@/core/registry/types';
import { RegistryI } from '@/core/types';
import {
  applyConfig,
  ArrayableVariadic,
  Dictionary,
  isNil,
  Optional,
  wrapVariadic,
} from '@/utilities';

export default class MapRegistry implements RegistryI {
  private modelsResolvers = new Map<string, ModelResolver>();

  private models = new Map<string, Promise<Model>>();

  private normalizeType: Optional<Normalizer<string>> = null;

  private prepareModel: Optional<ModelPreparator> = null;

  public constructor(config?: MapRegistryConfig) {
    this.configure(config);
  }

  public configure(config?: MapRegistryConfig, override = true) {
    applyConfig(this, config, override);
  }

  public async modelFor(rawType: string) {
    const type = normalize(rawType, this.normalizeType);
    const modelResolver = this.modelsResolvers.get(type)!;
    if (!modelResolver) {
      const registeredModels = [...this.modelsResolvers.keys()]
        .map((t) => `- \`${t}\``)
        .join('\n');

      logger.debug(
        `Could not found model for type \`${type}\` (raw type was \`${rawType}\`). Registered models:\n${registeredModels}`,
      );

      return null;
    }

    if (!this.models.has(type)) {
      this.models.set(type, (async () => {
        const model = await modelResolver();
        if (this.prepareModel) {
          await this.prepareModel(model);
        }

        return model;
      })());
    }

    return (await this.models.get(type))!;
  }

  public register(...models: ArrayableVariadic<Model> | [Dictionary<ModelResolver>]) {
    if (!isNil(models[0]) && !Array.isArray(models[0]) && !isModel(models[0])) {
      return this.registerAsync(models[0]);
    }

    return this.registerSync(...models as ArrayableVariadic<Model>);
  }

  public registerSync(...models: ArrayableVariadic<Model>) {
    wrapVariadic(...models).forEach((model) => {
      this.registerModel(model.$type, async () => model);
    });

    return this;
  }

  public registerAsync(models: Dictionary<ModelResolver>) {
    Object.entries(models).forEach(([rawType, resolver]) => {
      this.registerModel(rawType, resolver);
    });

    return this;
  }

  private registerModel(rawType: string, resolver: ModelResolver) {
    this.modelsResolvers.set(normalize(rawType, this.normalizeType), resolver);
  }
}
