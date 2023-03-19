import { ModelParsedDefinition, ModelPropConfig } from '@/core/model/types';
import { Dictionary, eachDescriptors, isNil, makeDescriptorHolder } from '@/utilities';

function isPropConfig(value: unknown): value is ModelPropConfig {
  return !isNil(value)
    && typeof value === 'object'
    && ((value as any).$MODEL_TYPE === 'attribute' || (value as any).$MODEL_TYPE === 'relation');
}

export default function makeDefinition<D extends {} = {}>(definition?: D) {
  const parsedDefinition: Dictionary = {};

  eachDescriptors(definition ?? {}, (key, descriptor) => {
    if (isPropConfig(descriptor.value)) {
      parsedDefinition[key] = {
        ...descriptor.value,
        noRetrieving: descriptor.value.noRetrieving ?? false,
        noSending: descriptor.value.noRetrieving ?? false,
        readOnly: descriptor.value.readOnly ?? false,
        key,
      };
    } else {
      parsedDefinition[key] = makeDescriptorHolder(descriptor);
    }
  });

  return parsedDefinition as ModelParsedDefinition<D>;
}
