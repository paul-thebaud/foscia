import { Action, Model, ModelKey } from '@/core';
import { param } from '@/http';
import consumePrevParams from '@/http/actions/context/consumers/consumePrevParams';
import mergeParamList from '@/jsonapi/actions/context/utilities/mergeParamList';
import { ArrayableVariadic, wrapVariadic } from '@/utilities';

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
    const prevFields = consumePrevParams(await action.useContext(), null)?.fields;

    return action.use(param('fields', {
      ...prevFields,
      [model.$config.type]: mergeParamList([
        prevFields?.[model.$config.type],
        ...wrapVariadic(...fieldset),
      ]),
    }));
  };
}
