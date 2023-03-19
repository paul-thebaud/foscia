import makeDefinition from '@/core/model/makeDefinition';
import makeModelClass from '@/core/model/makeModelClass';
import { Model, ModelConfig, ModelInstance, ModelParsedDefinition } from '@/core/model/types';

export default function makeModelFactory<ND extends {} = {}>(
  baseRawDefinition?: ND & ThisType<ModelInstance<ModelParsedDefinition<ND>>>,
  baseConfig?: Omit<ModelConfig, 'type'>,
) {
  return <D extends {} = {}>(
    config: ModelConfig | string,
    rawDefinition?: D & ThisType<ModelInstance<ModelParsedDefinition<ND & D>>>,
  ) => {
    const mergedConfig = typeof config === 'string'
      ? { ...baseConfig, type: config }
      : { ...baseConfig, ...config };
    const mergedDefinition = {
      ...makeDefinition(baseRawDefinition),
      ...makeDefinition(rawDefinition),
    };

    return makeModelClass(mergedConfig).extends(
      mergedDefinition,
    ) as Model<ModelParsedDefinition<ND & D>, ModelInstance<ModelParsedDefinition<ND & D>>>;
  };
}
