import { ModelAttribute, useTransform } from '@/core';

export default async function deserializeAttribute(
  def: ModelAttribute,
  key: string,
  value: unknown,
) {
  const transform = useTransform(def.transformer, 'deserialize');

  return {
    [key]: await transform(value),
  };
}
