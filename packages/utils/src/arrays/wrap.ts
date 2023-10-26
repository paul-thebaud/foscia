import isNil from '@foscia/utils/checks/isNil';
import { Arrayable, Optional } from '@foscia/utils/types';

export default function wrap<T>(value?: Optional<Arrayable<T>>): T[] {
  if (isNil(value)) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}
