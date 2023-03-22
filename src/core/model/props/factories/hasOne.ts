import relation, { RelationOptions } from '@/core/model/props/factories/relation';
import { ModelRelationRaw } from '@/core/model/types';

export type HasOneOptions<T> = RelationOptions<T>;

export default function hasOne<T>(
  config: string | HasOneOptions<T> = {},
): ModelRelationRaw<T> {
  return relation('hasOne', config);
}
