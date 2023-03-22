import isNil from '@/utilities/checks/isNil';
import { Optional } from '@/utilities/types';

export default function isNone(value: unknown): value is Optional<''> {
  return isNil(value) || value === '';
}
