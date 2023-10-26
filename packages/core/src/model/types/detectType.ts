import { ModelClass, ModelRelation } from '@foscia/core/model/types';
import detectRelationType from '@foscia/core/model/types/detectRelationType';
import { Optional } from '@foscia/utils';

export default function detectType(model: Optional<ModelClass>, def: Optional<ModelRelation>) {
  if (def) {
    return detectRelationType(model, def);
  }

  if (model) {
    return model.$type;
  }

  return undefined;
}
