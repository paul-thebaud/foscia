import isPropDef from '@/core/model/guards/isPropDef';
import { ModelParsedDefinition } from '@/core/model/types';
import { Dictionary, eachDescriptors, makeDescriptorHolder } from '@/utilities';

export default function makeDefinition<D extends {} = {}>(definition?: D) {
  const parsedDefinition: Dictionary = {};

  eachDescriptors(definition ?? {}, (key, descriptor) => {
    parsedDefinition[key] = descriptor.value && isPropDef(descriptor.value)
      ? descriptor.value : makeDescriptorHolder(descriptor);
  });

  return parsedDefinition as ModelParsedDefinition<D>;
}
