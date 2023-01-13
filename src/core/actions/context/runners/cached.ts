import cachedOr from '@/core/actions/context/runners/cachedOr';
import { ActionContext } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function cached<M extends Model>() {
  return cachedOr<ActionContext, M, null>(() => null);
}
