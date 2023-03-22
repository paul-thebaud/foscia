import { ModelClass, ModelRelation } from '@/core/model/types';
import detectType from '@/core/model/types/detectType';
import { RegistryI } from '@/core/types';
import { isNil, Optional } from '@/utilities';

export default async function detectModel(
  model: Optional<ModelClass>,
  def: Optional<ModelRelation>,
  registry?: Optional<RegistryI>,
) {
  const type = detectType(model, def);
  if (model && model.$type === type) {
    return model;
  }

  if (!isNil(type) && !isNil(registry)) {
    return registry.modelFor(type);
  }

  return null;
}
