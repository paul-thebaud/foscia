import { ModelClass, ModelRelation } from '@foscia/core/model/types';
import guessRelationType from '@foscia/core/model/types/guessRelationType';
import { isNil, Optional } from '@foscia/utils';

export default function detectRelationType(
  model: Optional<ModelClass>,
  def: ModelRelation,
) {
  if (!isNil(def.type)) {
    return def.type;
  }

  if (!isNil(model)) {
    return model.$config.guessRelationType
      ? model.$config.guessRelationType(model, def)
      : guessRelationType(def);
  }

  return undefined;
}
