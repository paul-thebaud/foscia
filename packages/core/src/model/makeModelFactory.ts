import makeDefinition from '@foscia/core/model/makeDefinition';
import makeModelClass from '@foscia/core/model/makeModelClass';
import { Model, ModelConfig, ModelInstance, ModelParsedDefinition } from '@foscia/core/model/types';

export default function makeModelFactory<ND extends {} = {}>(
  baseRawDefinition?: ND & ThisType<ModelInstance<ModelParsedDefinition<ND>>>,
  baseConfig?: ModelConfig,
) {
  return <D extends {} = {}>(
    rawConfig: string | (ModelConfig & { type: string; }),
    rawDefinition?: D & ThisType<ModelInstance<ModelParsedDefinition<ND & D>>>,
  ) => {
    const { type, ...config } = typeof rawConfig === 'string'
      ? { type: rawConfig }
      : rawConfig;

    const mergedConfig: ModelConfig = {
      ...baseConfig,
      ...config,
    };

    const mergedDefinition = {
      ...makeDefinition(baseRawDefinition),
      ...makeDefinition(rawDefinition),
    };

    return makeModelClass(type, mergedConfig).extends(
      mergedDefinition,
    ) as Model<ModelParsedDefinition<ND & D>, ModelInstance<ModelParsedDefinition<ND & D>>>;
  };
}
