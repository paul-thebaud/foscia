import context from '@/core/actions/context/enhancers/context';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ConsumeInclude, ConsumeModel } from '@/core/actions/types';
import { Model, ModelRelationDotKey } from '@/core/model/types';
import { ArrayableVariadic, uniqueValues, wrapVariadic } from '@/utilities';

export default function include<
  C extends {},
  M extends Model,
>(...relations: ArrayableVariadic<ModelRelationDotKey<M>>) {
  return async (
    action: Action<C & ConsumeInclude & ConsumeModel<M>>,
  ) => action.use(context({
    include: uniqueValues([
      ...((await action.useContext()).include ?? []),
      ...wrapVariadic(...relations),
    ]),
  }));
}

type IncludeEnhancerExtension = ActionParsedExtension<{
  include<C extends {}, E extends {}, M extends Model>(
    this: Action<C & ConsumeModel<M>, E>,
    ...relations: ArrayableVariadic<ModelRelationDotKey<M>>
  ): Action<C, E>;
}>;

include.extension = makeEnhancersExtension({ include }) as IncludeEnhancerExtension;
