import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeAdapter } from '@/core/actions/types';

export default function consumeAdapter<AD, D = never>(
  context: Partial<ConsumeAdapter<AD>>,
  defaultValue?: D,
) {
  return consumeContext(context, 'adapter', ['context'], defaultValue);
}
