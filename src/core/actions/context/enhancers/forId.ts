import context from '@/core/actions/context/enhancers/context';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ConsumeId } from '@/core/actions/types';
import { ModelId } from '@/core/model/types';

/**
 * Target the given ID.
 *
 * @param id
 *
 * @category Enhancers
 */
export default function forId(id: ModelId | undefined) {
  return context({ id });
}

type EnhancerExtension = ActionParsedExtension<{
  forId<C extends {}, E extends {}, Id extends ModelId | undefined>(
    this: Action<C, E>,
    id: Id,
  ): Action<C & ConsumeId, E>;
}>;

forId.extension = makeEnhancersExtension({ forId }) as EnhancerExtension;
