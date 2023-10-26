import { appendIncludeParams } from '@foscia/http';
import { optionalJoin } from '@foscia/utils';

export default function appendJsonApiParams(context: {}) {
  return appendIncludeParams(context, {}, 'include', (include) => optionalJoin(include, ','));
}
