import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeInclude } from '@/core/actions/types';

export default function consumeInclude<D = never>(
  context: Partial<ConsumeInclude>,
  defaultValue?: D,
) {
  return consumeContext(context, 'include', ['include'], defaultValue);
}
