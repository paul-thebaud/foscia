import {
  Action,
  ActionParsedExtension,
  consumeModel,
  consumeRegistry,
  consumeRelation,
  detectModel,
  FosciaError,
  InferConsumedInstance,
  makeEnhancersExtension,
  ModelKey,
} from '@foscia/core';
import fieldsFor from '@foscia/jsonapi/actions/context/enhancers/fieldsFor';
import { ArrayableVariadic, isNil } from '@foscia/shared';

/**
 * [Select the given JSON:API fieldsets](https://jsonapi.org/format/#fetching-sparse-fieldsets)
 * for the current context's model.
 * The new fieldsets will be merged with the previous ones.
 *
 * @param fieldset
 *
 * @category Enhancers
 */
export default function fields<
  C extends {},
  I extends InferConsumedInstance<C>,
>(
  ...fieldset: ArrayableVariadic<ModelKey<I>>
) {
  return async (action: Action<C>) => {
    const context = await action.useContext();
    const registry = consumeRegistry(context, null);
    const model = await detectModel(
      consumeModel(context, null),
      consumeRelation(context, null),
      registry,
    );

    if (isNil(model)) {
      throw new FosciaError(
        'Could not detect context\'s model when applying fieldsets.',
      );
    }

    return action.use(fieldsFor(model as any, ...fieldset));
  };
}

type FieldsEnhancerExtension = ActionParsedExtension<{
  fields<C extends {}, E extends {}, I extends InferConsumedInstance<C>>(
    this: Action<C, E>,
    ...fieldset: ArrayableVariadic<ModelKey<I>>
  ): Action<C, E>;
}>;

fields.extension = makeEnhancersExtension({ fields }) as FieldsEnhancerExtension;
