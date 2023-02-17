import useContext from '@/core/actions/context/consumers/useContext';
import { ConsumableContext } from '@/core/actions/types';
import InvalidContextError from '@/core/errors/invalidContextError';
import { isNil } from '@/utilities';

// TODO Default value if not available.
// TODO Check to validate the type of targeted value.
// TODO Opt out from typed context after those two are done.
export default async function useRequiredContext<C extends {}, K extends keyof C>(
  actionOrContext: ConsumableContext<C>,
  contextKey: K,
  prerequisites: string[] = [],
) {
  const context = await useContext(actionOrContext);
  const value = context[contextKey];
  if (isNil(value)) {
    const prerequisitesStr = prerequisites.map((p) => `- \`${p}\``).join('\n');

    throw new InvalidContextError(
      `Cannot access \`${String(contextKey)}\` context. You should use one of the following enhancers before:\n${prerequisitesStr}`,
    );
  }

  return value!;
}
