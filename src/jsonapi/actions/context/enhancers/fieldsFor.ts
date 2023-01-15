import { Action, ActionContext, Model, ModelKey } from '@/core';
import useContext from '@/core/actions/context/consumers/useContext';
import { param } from '@/http';
import prevParams from '@/http/actions/context/utilities/prevParams';
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
export default function fieldsFor<M extends Model>(
  model: M,
  ...fieldset: ArrayableVariadic<ModelKey<M>>
) {
  return async <C extends ActionContext>(action: Action<C>) => {
    const prevFields = prevParams(await useContext(action))?.fields;

    return action.use(param('fields', {
      ...prevFields,
      [model.$config.type]: mergeParamList([
        prevFields?.[model.$config.type],
        ...wrapVariadic(...fieldset),
      ]),
    }));
  };
}
