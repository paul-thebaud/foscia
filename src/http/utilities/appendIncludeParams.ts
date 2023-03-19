import { normalizeInclude } from '@/core';
import { consumeInclude } from '@/core/actions';
import { Dictionary } from '@/utilities/types';

export default async function appendIncludeParams(
  context: {},
  params: Dictionary,
  key: string,
  transform: (include: string[]) => any,
) {
  const include = consumeInclude(context, null);
  if (include && include.length) {
    // eslint-disable-next-line no-param-reassign
    params[key] = transform(await normalizeInclude(context, include));
  }

  return params;
}
