import { ConsumableContext } from '@/core/actions/types';

export default function useContext<C extends {}>(
  actionOrContext: ConsumableContext<C>,
): Promise<C> {
  return (
    'computeContext' in actionOrContext
      ? actionOrContext.computeContext()
      : Promise.resolve(actionOrContext)
  ) as any;
}
