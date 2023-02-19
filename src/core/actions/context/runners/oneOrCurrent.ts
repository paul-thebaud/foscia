import consumeInstance from '@/core/actions/context/consumers/consumeInstance';
import oneOr from '@/core/actions/context/runners/oneOr';
import { ConsumeInstance } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function oneOrCurrent<
  C extends ConsumeInstance<I>,
  M extends Model,
  I extends InstanceType<M>,
>() {
  return oneOr<C, M, unknown, Promise<I>>(
    async (action) => consumeInstance(await action.useContext()),
  );
}
