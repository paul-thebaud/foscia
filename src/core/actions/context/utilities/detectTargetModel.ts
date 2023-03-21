import consumeRegistry from '@/core/actions/context/consumers/consumeRegistry';
import { isNone, Optional } from '@/utilities';

export default async function detectTargetModel(
  context: {},
  type: Optional<string>,
) {
  const registry = consumeRegistry(context, null);
  if (registry && !isNone(type)) {
    return registry.modelFor(type);
  }

  return null;
}
