import isInstance from '@/core/model/guards/isInstance';
import { isNil } from '@/utilities';

export default function isSame(
  value: unknown,
  otherValue: unknown,
): boolean {
  return isInstance(value)
    && isInstance(otherValue)
    && value.$model.$type === otherValue.$model.$type
    && !isNil(value.id)
    && value.id === otherValue.id;
}
