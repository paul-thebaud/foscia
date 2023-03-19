import { ModelPropConfig, ModelRelationConfig, ModelRelationType } from '@/core/model/types';

export type RelationOptions<T> = ModelPropConfig<T> & {
  type?: string;
  path?: string;
};

export default function makeRelationConfig<T>(
  relationType: ModelRelationType,
  config: string | RelationOptions<T> = {},
): ModelRelationConfig<T> {
  return {
    $MODEL_TYPE: 'relation',
    $RELATION_TYPE: relationType,
    ...(
      typeof config === 'string' ? {
        type: config,
      } : config
    ),
  };
}
