import useInstanceContext from '@/core/actions/context/consumers/useInstanceContext';
import oneOr from '@/core/actions/context/runners/oneOr';
import { ConsumeInstance } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function oneOrCurrent<
  M extends Model,
  I extends InstanceType<M>,
  C extends ConsumeInstance<I>,
>() {
  return oneOr<C, M, unknown, Promise<I>>((action) => useInstanceContext(action));
}
