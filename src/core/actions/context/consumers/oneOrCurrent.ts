import Action from '@/core/actions/action';
import oneOr from '@/core/actions/context/consumers/oneOr';
import { ConsumeAdapter, ConsumeDeserializer, ConsumeInstance } from '@/core/actions/types';
import { ModelDefinition } from '@/core/model/types';

export default function oneOrCurrent<R, D, S extends ModelDefinition, I>() {
  return (
    action: Action<ConsumeAdapter<R, D> & ConsumeDeserializer<D> & ConsumeInstance<S, I>>,
  ) => action.run(oneOr(async (a) => (await a.getContext()).instance as I));
}