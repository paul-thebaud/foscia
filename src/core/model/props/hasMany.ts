import prop, { PropOptions } from '@/core/model/props/prop';
import { ModelRelation } from '@/core/model/types';

export type HasManyOptions<T, S> = Omit<PropOptions<T, S>, 'transformer'>;

export default function hasMany<T, S = T>(
  options: HasManyOptions<T[], S[]> = {},
): ModelRelation<T[], S[]> {
  return {
    ...prop(options),
    $MODEL_TYPE: 'relation',
  };
}
