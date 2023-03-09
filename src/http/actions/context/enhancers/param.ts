import { Action, ActionParsedExtension, context, makeEnhancersExtension } from '@/core';
import consumePrevParams from '@/http/actions/context/consumers/consumePrevParams';
import { Dictionary } from '@/utilities';

/**
 * Set the given query param on the request.
 * The new params will be merged with the previous ones.
 *
 * @param key
 * @param value
 *
 * @category Enhancers
 */
export default function param(key: string | Dictionary, value?: unknown) {
  return async <C extends {}>(action: Action<C>) => action.use(context({
    params: {
      ...consumePrevParams(await action.useContext(), null),
      ...(typeof key === 'string' ? { [key]: value } : key),
    },
  }));
}

type ParamEnhancerExtension = ActionParsedExtension<{
  param<C extends {}, E extends {}>(
    this: Action<C, E>,
    key: string | Dictionary,
    value?: unknown,
  ): Action<C, E>;
}>;

param.extension = makeEnhancersExtension({ param }) as ParamEnhancerExtension;
