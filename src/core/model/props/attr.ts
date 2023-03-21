import { ModelAttributeRaw, ModelPropRaw } from '@/core/model/types';
import { Transform } from '@/core/transformers/types';

export type AttrOptions<T> = ModelPropRaw<T> & {
  transformer?: Transform<T | null> | undefined;
};

export type AttrOptionsVariadic<T> =
  | []
  | [AttrOptions<T>]
  | [Transform<T | null>]
  | [Transform<T | null>, Omit<AttrOptions<T>, 'transformer'>];

function attr<T>(
  ...config: AttrOptionsVariadic<T>
): ModelAttributeRaw<T> {
  const attribute: ModelAttributeRaw<T> = { $MODEL_TYPE: 'attribute' };

  if (config.length === 0) {
    return attribute;
  }

  if (config.length === 1) {
    if (typeof config[0] === 'function'
      || ('serialize' in config[0] && 'deserialize' in config[0])
    ) {
      [attribute.transformer] = config;

      return attribute;
    }

    return { ...attribute, ...config[0] };
  }

  const transformer = config[0];

  return {
    transformer,
    ...attribute,
    ...config[1],
  };
}

export default attr;
