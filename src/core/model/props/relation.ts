import { ModelProp, ModelRelation, ModelRelationType } from '@/core/model/types';

export type RelationConfig<T> = ModelProp<T> & {
  type?: string;
  path?: string;
};

export default function relation<T>(
  relationType: ModelRelationType,
  config: RelationConfig<T> = {},
): ModelRelation<T> {
  return {
    $MODEL_TYPE: 'relation',
    $RELATION_TYPE: relationType,
    ...config,
  };
}
