import { ModelAttributeRaw, ModelPropRaw } from '@/core/model/types';
import { Transform } from '@/core/transformers/types';

export type AttrOptions<T, R extends boolean> = Omit<ModelPropRaw<T, R>, 'readOnly'> & {
  transformer?: Transform<T | null> | undefined;
};

export type AttrOptionsVariadic<T, R extends boolean = false> =
  | []
  | [AttrOptions<T, R>]
  | [Transform<T | null>]
  | [Transform<T | null>, Omit<AttrOptions<T, R>, 'transformer'>];

export default function attr<T, R extends boolean = false>(
  ...config: AttrOptionsVariadic<T, R>
): ModelAttributeRaw<T, R> {
  const attribute: ModelAttributeRaw<T, R> = { $MODEL_TYPE: 'attribute' };

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
