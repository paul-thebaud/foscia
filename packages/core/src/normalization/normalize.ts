import { Normalizer } from '@foscia/core/normalization/types';
import { Optional } from '@foscia/utils';

export default function normalize<T>(value: T, normalizer: Optional<Normalizer<T>>) {
  return normalizer ? normalizer(value) : value;
}
