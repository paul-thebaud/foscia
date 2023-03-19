import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeData } from '@/core/actions/types';

export default function consumeData<C extends {}, D = never>(
  context: C & Partial<ConsumeData>,
  defaultValue?: D,
) {
  return consumeContext(context, 'data', ['context'], defaultValue);
}
