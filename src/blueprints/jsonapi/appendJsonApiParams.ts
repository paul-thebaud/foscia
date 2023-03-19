import { appendIncludeParams } from '@/http';
import { optionalJoin } from '@/utilities';

export default function appendJsonApiParams(context: {}) {
  return appendIncludeParams(context, {}, 'include', (include) => optionalJoin(include, ','));
}
