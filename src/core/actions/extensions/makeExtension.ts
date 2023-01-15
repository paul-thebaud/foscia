import { ActionParsedExtension } from '@/core/actions/types';
import { Dictionary, eachDescriptors, makeDescriptorHolder } from '@/utilities';

export default function makeExtension<E extends {} = {}>(extension: E) {
  const parsedDefinition: Dictionary = {};

  eachDescriptors(extension ?? {}, (key, descriptor) => {
    parsedDefinition[key] = makeDescriptorHolder(descriptor);
  });

  return parsedDefinition as ActionParsedExtension<E>;
}
