import makeRelationConfig, { RelationOptions } from '@/core/model/props/makeRelationConfig';
import { ModelRelationConfig } from '@/core/model/types';

export type HasOneOptions<T> = RelationOptions<T>;

export default function hasOne<T>(
  config: string | HasOneOptions<T> = {},
): ModelRelationConfig<T> {
  return makeRelationConfig('hasOne', config);
}
