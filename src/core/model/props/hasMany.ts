import makeRelationConfig, { RelationOptions } from '@/core/model/props/makeRelationConfig';
import { ModelRelationConfig } from '@/core/model/types';

export type HasManyOptions<T> = RelationOptions<T>;

export default function hasMany<T>(
  config: string | HasManyOptions<T[]> = {},
): ModelRelationConfig<T[]> {
  return makeRelationConfig('hasMany', config);
}
