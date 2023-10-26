import makeRelation, { RelationOptions } from '@foscia/core/model/props/factories/makeRelation';
import { ModelRelationRaw } from '@foscia/core/model/types';

export type HasManyOptions<T> = RelationOptions<T>;

export default function hasMany<T>(
  config: string | HasManyOptions<T[]> = {},
): ModelRelationRaw<T[]> {
  return makeRelation('hasMany', config);
}
