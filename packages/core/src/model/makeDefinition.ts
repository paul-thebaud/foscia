import isPropDef from '@foscia/core/model/props/checks/isPropDef';
import { ModelParsedDefinition } from '@foscia/core/model/types';
import { Dictionary, eachDescriptors, makeDescriptorHolder } from '@foscia/utils';

export default function makeDefinition<D extends {} = {}>(definition?: D) {
  const parsedDefinition: Dictionary = {};

  eachDescriptors(definition ?? {}, (key, descriptor) => {
    parsedDefinition[key] = descriptor.value && isPropDef(descriptor.value)
      ? { ...descriptor.value, key }
      : makeDescriptorHolder(descriptor);
  });

  return parsedDefinition as ModelParsedDefinition<D>;
}
