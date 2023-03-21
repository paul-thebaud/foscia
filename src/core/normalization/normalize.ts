import { Normalizer } from '@/core/normalization/types';
import { Optional } from '@/utilities';

export default function normalize<T>(value: T, normalizer: Optional<Normalizer<T>>) {
  return normalizer ? normalizer(value) : value;
}
