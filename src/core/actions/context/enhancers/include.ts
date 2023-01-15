import Action from '@/core/actions/action';
import useContext from '@/core/actions/context/consumers/useContext';
import context from '@/core/actions/context/enhancers/context';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { ActionContext, ActionParsedExtension, ConsumeModel } from '@/core/actions/types';
import { Model, ModelRelationDotKey } from '@/core/model/types';
import { ArrayableVariadic, uniqueValues, wrapVariadic } from '@/utilities';

export default function include<C extends ActionContext, M extends Model>(
  ...relations: ArrayableVariadic<ModelRelationDotKey<M>>
) {
  return async (
    action: Action<C & ConsumeModel<M>>,
  ) => action.use(context({
    includes: uniqueValues([
      ...((await useContext(action)).includes ?? []),
      ...wrapVariadic(...relations),
    ]),
  }));
}

type IncludeEnhancerExtension = ActionParsedExtension<{
  include<C extends ActionContext, A extends Action<C>, M extends Model>(
    this: Action<C & ConsumeModel<M>> & A,
    ...relations: ArrayableVariadic<ModelRelationDotKey<M>>
  ): Action<C> & A;
}>;

include.extension = makeEnhancersExtension({ include }) as IncludeEnhancerExtension;
