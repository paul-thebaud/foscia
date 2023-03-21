import { ModelClass, ModelRelation } from '@/core/model/types';
import { isNil, Optional } from '@/utilities';

export default function detectRelationType(
  def: ModelRelation,
  model?: Optional<ModelClass>,
) {
  if (!isNil(def.type)) {
    return def.type;
  }

  if (!isNil(model) && !isNil(model.$config.guessRelationType)) {
    return model.$config.guessRelationType(model, def) ?? undefined;
  }

  return undefined;
}
