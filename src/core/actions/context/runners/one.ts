import oneOr from '@/core/actions/context/runners/oneOr';
import { Model } from '@/core/model/types';

export default function one<C extends {}, M extends Model, AD>() {
  return oneOr<C, M, AD, null>(() => null);
}
