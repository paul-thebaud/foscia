import consumeContext from '@foscia/core/actions/context/consumers/consumeContext';
import { ConsumeModelPath } from '@foscia/core/actions/types';

export default function consumeModelPath<C extends {}, D = never>(
  context: C & Partial<ConsumeModelPath>,
  defaultValue?: D,
) {
  return consumeContext(context, 'modelPath', ['context'], defaultValue);
}
