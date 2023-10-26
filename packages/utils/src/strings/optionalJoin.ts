import isNone from '@foscia/utils/checks/isNone';
import { Optional } from '@foscia/utils/types';

export default function optionalJoin(
  strings: Optional<string>[],
  separator: string,
) {
  return strings
    .filter((s) => !isNone(s))
    .join(separator);
}
