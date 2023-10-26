import { ModelPropRaw, ModelPropSync } from '@foscia/core/model/types';

export default function shouldSync(def: ModelPropRaw, actions: ModelPropSync[]) {
  return typeof def.sync === 'string'
    ? actions.indexOf(def.sync) !== -1
    : (def.sync ?? true);
}
