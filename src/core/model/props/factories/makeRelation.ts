import { ModelPropRaw, ModelRelationRaw, ModelRelationType } from '@/core/model/types';

export type RelationOptions<T> = ModelPropRaw<T> & {
  type?: string;
  path?: string;
};

export default function makeRelation<T>(
  relationType: ModelRelationType,
  config: string | RelationOptions<T> = {},
): ModelRelationRaw<T> {
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
