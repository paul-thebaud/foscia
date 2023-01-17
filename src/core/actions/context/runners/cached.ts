import cachedOr from '@/core/actions/context/runners/cachedOr';
import { Model } from '@/core/model/types';

export default function cached<C extends {}, M extends Model>() {
  return cachedOr<C, M, null>(() => null);
}
