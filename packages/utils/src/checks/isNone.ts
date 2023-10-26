import isNil from '@foscia/utils/checks/isNil';
import { Optional } from '@foscia/utils/types';

export default function isNone(value: unknown): value is Optional<''> {
  return isNil(value) || value === '';
}
