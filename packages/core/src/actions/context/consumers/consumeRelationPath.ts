import consumeContext from '@foscia/core/actions/context/consumers/consumeContext';
import { ConsumeRelationPath } from '@foscia/core/actions/types';

export default function consumeRelationPath<C extends {}, D = never>(
  context: C & Partial<ConsumeRelationPath>,
  defaultValue?: D,
) {
  return consumeContext(context, 'relationPath', ['context'], defaultValue);
}
