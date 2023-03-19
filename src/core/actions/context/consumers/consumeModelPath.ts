import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeModelPath } from '@/core/actions/types';

export default function consumeModelPath<C extends {}, D = never>(
  context: C & Partial<ConsumeModelPath>,
  defaultValue?: D,
) {
  return consumeContext(context, 'modelPath', ['context'], defaultValue);
}
