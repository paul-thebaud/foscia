import context from '@/core/actions/context/enhancers/context';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeInclude,
  InferConsumedInstance,
} from '@/core/actions/types';
import { ModelRelationDotKey } from '@/core/model/types';
import { ArrayableVariadic, uniqueValues, wrapVariadic } from '@/utilities';

/**
 * Eager load the given relations for the current model definition. It accepts
 * deep relations through dot notation. The new relations will be merged with
 * the previous ones.
 *
 * @param relations
 *
 * @category Enhancers
 */
export default function include<
  C extends {},
  I extends InferConsumedInstance<C>,
>(...relations: ArrayableVariadic<ModelRelationDotKey<I>>) {
  return async (
    action: Action<C & ConsumeInclude>,
  ) => action.use(context({
    include: uniqueValues([
      ...((await action.useContext()).include ?? []),
      ...wrapVariadic(...relations),
    ]),
  }));
}

type EnhancerExtension = ActionParsedExtension<{
  include<C extends {}, E extends {}, I extends InferConsumedInstance<C>>(
    this: Action<C, E>,
    ...relations: ArrayableVariadic<ModelRelationDotKey<I>>
  ): Action<C, E>;
}>;

include.extension = makeEnhancersExtension({ include }) as EnhancerExtension;
