import consumeContext from '@foscia/core/actions/context/consumers/consumeContext';
import { ConsumeCache } from '@foscia/core/actions/types';

export default function consumeCache<C extends {}, D = never>(
  context: C & Partial<ConsumeCache>,
  defaultValue?: D,
) {
  return consumeContext(context, 'cache', ['context'], defaultValue);
}
