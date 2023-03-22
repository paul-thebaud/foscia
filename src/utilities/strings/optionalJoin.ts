import isNone from '@/utilities/checks/isNone';
import { Optional } from '@/utilities/types';

export default function optionalJoin(
  strings: Optional<string>[],
  separator: string,
) {
  return strings
    .filter((s) => !isNone(s))
    .join(separator);
}
