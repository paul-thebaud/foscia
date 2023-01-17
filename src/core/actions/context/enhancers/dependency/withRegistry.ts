import context from '@/core/actions/context/enhancers/context';
import { RegistryI } from '@/core/types';

export default function withRegistry<Registry extends RegistryI>(registry: Registry) {
  return context({ registry });
}
