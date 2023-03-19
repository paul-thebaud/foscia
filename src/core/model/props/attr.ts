import { ModelAttributeConfig, ModelPropConfig } from '@/core/model/types';
import { Transform } from '@/core/transformers/types';

export type AttrOptions<T, S> = ModelPropConfig<T> & {
  transformer?: Transform<T | null, S> | undefined;
};

export type AttrOptionsVariadic<T, S> =
  | []
  | [AttrOptions<T, S>]
  | [Transform<T | null, S>]
  | [Transform<T | null, S>, Omit<AttrOptions<T, S>, 'transformer'>];

function attr<T, S = unknown>(
  ...config: AttrOptionsVariadic<T, S>
): ModelAttributeConfig<T, S> {
  const attribute: ModelAttributeConfig<T, S> = { $MODEL_TYPE: 'attribute' };

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
