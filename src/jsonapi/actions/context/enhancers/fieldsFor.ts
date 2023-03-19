import {
  Action,
  ActionParsedExtension,
  makeEnhancersExtension,
  Model,
  ModelKey,
  normalizeKeys,
} from '@/core';
import { param } from '@/http';
import consumePrevParams from '@/http/actions/context/consumers/consumePrevParams';
import { ArrayableVariadic, optionalJoin, uniqueValues, wrapVariadic } from '@/utilities';

/**
 * [Select the given JSON:API fieldsets](https://jsonapi.org/format/#fetching-sparse-fieldsets)
 * for the given model. The new fieldsets will be merged with the previous ones.
 *
 * @param model
 * @param fieldset
 *
 * @category Enhancers
 */
export default function fieldsFor<C extends {}, M extends Model>(
  model: M,
  ...fieldset: ArrayableVariadic<ModelKey<M>>
) {
  return async (action: Action<C>) => {
    const context = await action.useContext();
    const prevFields = consumePrevParams(context, null)?.fields;
    const nextFields = await normalizeKeys(
      context,
      model,
      wrapVariadic(...fieldset) as string[],
    );

    return action.use(param('fields', {
      ...prevFields,
      [model.$config.type]: optionalJoin(uniqueValues([
        ...(prevFields ?? {})[model.$config.type],
        ...nextFields,
      ]), ','),
    }));
  };
}

type FieldsForEnhancerExtension = ActionParsedExtension<{
  fieldsFor<C extends {}, E extends {}, M extends Model>(
    this: Action<C, E>,
    model: M,
    ...fieldset: ArrayableVariadic<ModelKey<M>>
  ): Action<C, E>;
}>;

fieldsFor.extension = makeEnhancersExtension({ fieldsFor }) as FieldsForEnhancerExtension;
