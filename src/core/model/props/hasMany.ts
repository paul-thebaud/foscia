import relation, { RelationOptions } from '@/core/model/props/relation';
import { ModelRelationRaw } from '@/core/model/types';

export type HasManyOptions<T> = RelationOptions<T>;

export default function hasMany<T>(
  config: string | HasManyOptions<T[]> = {},
): ModelRelationRaw<T[]> {
  return relation('hasMany', config);
}
