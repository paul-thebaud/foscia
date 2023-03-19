import consumeContext from '@/core/actions/context/consumers/consumeContext';
import { ConsumeKeyNormalizer } from '@/core/actions/types';

export default function consumeKeyNormalizer<C extends {}, D = never>(
  context: C & Partial<ConsumeKeyNormalizer>,
  defaultValue?: D,
) {
  return consumeContext(context, 'keyNormalizer', ['context'], defaultValue);
}
