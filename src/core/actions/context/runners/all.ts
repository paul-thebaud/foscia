import Action from '@/core/actions/action';
import allUsing from '@/core/actions/context/runners/allUsing';
import makeRunnerExtension from '@/core/actions/extensions/makeRunnerExtension';
import { ActionExtension, ConsumeAdapter, ConsumeDeserializer, ConsumeModel } from '@/core/actions/types';
import { Model } from '@/core/model/types';

export default function all<AD, M extends Model>() {
  return (
    action: Action<ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
  ) => action.run(allUsing(({ instances }) => instances));
}

type AllRunnerExtension = ActionExtension<'all', <AD, M extends Model>(
  this: Action<ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
) => Promise<InstanceType<M>[]>>;

all.extension = makeRunnerExtension({ all }) as AllRunnerExtension;
