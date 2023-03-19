import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeRelation } from '@/core/actions/types';

export default function consumeRelation<C extends {}, D = never>(
  context: C & Partial<ConsumeRelation>,
  defaultValue?: D,
) {
  return consumeContext(context, 'relation', ['forRelation'], defaultValue);
}
