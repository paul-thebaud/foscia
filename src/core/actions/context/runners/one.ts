import oneOr from '@/core/actions/context/runners/oneOr';
import { ActionContext } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function one<M extends Model>() {
  return oneOr<ActionContext, M, unknown, null>(() => null);
}
