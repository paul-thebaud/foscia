import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeCache } from '@/core/actions/types';

export default function consumeCache<D = never>(
  context: Partial<ConsumeCache>,
  defaultValue?: D,
) {
  return consumeContext(context, 'cache', ['context'], defaultValue);
}
