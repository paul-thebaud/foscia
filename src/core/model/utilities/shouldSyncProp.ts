import { ModelPropRaw, ModelPropSync } from '@/core/model/types';

export default function shouldSyncProp(def: ModelPropRaw, actions: ModelPropSync[]) {
  return typeof def.sync === 'string'
    ? actions.indexOf(def.sync) !== -1
    : (def.sync ?? true);
}
