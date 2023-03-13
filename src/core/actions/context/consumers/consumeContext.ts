import InvalidContextError from '@/core/errors/invalidContextError';
import { isNil } from '@/utilities';

export const CONSUME_DEFAULT = Symbol('default throw invalid context error symbol') as unknown as never;

export default function consumeContext<
  Context extends {},
  Key extends keyof Context,
  Default = never,
>(
  context: Context,
  key: Key,
  enhancers: string[],
  defaultValue: Default = CONSUME_DEFAULT,
) {
  const value = context[key];
  if (isNil(value)) {
    if (defaultValue !== CONSUME_DEFAULT) {
      return defaultValue;
    }

    const enhancersList = enhancers.map((e) => `- \`${e}\``).join('\n');

    throw new InvalidContextError(
      `Cannot access \`${String(key)}\` context. You should use one of the following enhancers before:\n${enhancersList}`,
    );
  }

  return value!;
}
