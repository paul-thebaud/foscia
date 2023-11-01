import { ModelClass, ModelRelation } from '@foscia/core/model/types';
import detectType from '@foscia/core/model/types/detectType';
import { RegistryI } from '@foscia/core/types';
import { isNil, Optional } from '@foscia/shared';

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
