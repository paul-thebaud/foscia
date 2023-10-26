import { ModelClass, ModelRelation } from '@foscia/core/model/types';
import { isNil, Optional } from '@foscia/utils';

export default function detectRelationType(
  model: Optional<ModelClass>,
  def: ModelRelation,
) {
  if (!isNil(def.type)) {
    return def.type;
  }

  if (!isNil(model) && !isNil(model.$config.guessRelationType)) {
    return model.$config.guessRelationType(model, def) ?? undefined;
  }

  return undefined;
}
