import makeId, { IdOptions } from '@/core/model/props/factories/makeId';
import { ModelIdType } from '@/core/model/types';

export default function lid<T extends ModelIdType | null = ModelIdType>(
  config: IdOptions<T> = {},
) {
  return makeId('lid', config);
}
