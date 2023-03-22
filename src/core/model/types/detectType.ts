import { ModelClass, ModelRelation } from '@/core/model/types';
import detectRelationType from '@/core/model/types/detectRelationType';
import { Optional } from '@/utilities/types';

export default function detectType(model: Optional<ModelClass>, def: Optional<ModelRelation>) {
  if (def) {
    return detectRelationType(model, def);
  }

  if (model) {
    return model.$type;
  }

  return undefined;
}
