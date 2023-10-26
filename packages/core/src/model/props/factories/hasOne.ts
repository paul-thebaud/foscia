import makeRelation, { RelationOptions } from '@foscia/core/model/props/factories/makeRelation';
import { ModelRelationRaw } from '@foscia/core/model/types';

export type HasOneOptions<T> = RelationOptions<T>;

export default function hasOne<T>(
  config: string | HasOneOptions<T> = {},
): ModelRelationRaw<T> {
  return makeRelation('hasOne', config);
}
