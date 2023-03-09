import allUsing from '@/core/actions/context/runners/allUsing';
import makeRunnersExtension from '@/core/actions/extensions/makeRunnersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeAdapter,
  ConsumeDeserializer,
  ConsumeModel,
} from '@/core/actions/types';
import { Model } from '@/core/model/types';

/**
 * Run the action and deserialize an array of model's instance.
 *
 * @category Runners
 */
export default function all<C extends {}, AD, M extends Model>() {
  return (
    action: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
  ) => action.run(allUsing(({ instances }) => instances));
}

type AllRunnerExtension = ActionParsedExtension<{
  all<C extends {}, AD, M extends Model>(
    this: Action<C & ConsumeAdapter<AD> & ConsumeDeserializer<AD> & ConsumeModel<M>>,
  ): Promise<InstanceType<M>[]>;
}>;

all.extension = makeRunnersExtension({ all }) as AllRunnerExtension;
