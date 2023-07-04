import { all, forRelation, one, when } from '@/core/actions';
import { ActionFactory, ConsumeAdapter, ConsumeDeserializer } from '@/core/actions/types';
import isPluralRelationDef from '@/core/model/props/checks/isPluralRelationDef';
import loadUsingValue from '@/core/model/relations/loadUsingValue';
import { ModelInstance, ModelRelationKey } from '@/core/model/types';
import { DeserializedData } from '@/core/types';
import { Arrayable, ArrayableVariadic, wrap, wrapVariadic } from '@/utilities';

export default function makeForRelationLoader<
  AD,
  DD extends DeserializedData,
>(
  action: ActionFactory<[], ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD>, {}>,
) {
  return async <I extends ModelInstance>(
    instances: Arrayable<I>,
    ...relations: ArrayableVariadic<ModelRelationKey<I>>
  ) => {
    const allRelations = wrapVariadic(...relations);
    if (!allRelations.length) {
      return;
    }

    await Promise.all(wrap(instances).map(async (instance) => {
      await Promise.all(wrapVariadic(...relations).map(async (relation) => {
        const def = instance.$model.$schema[relation];
        const isPlural = isPluralRelationDef(def);

        const value = await action()
          .use(forRelation(instance, relation))
          .run(when(isPlural, all(), one()));

        loadUsingValue(instance, relation, value as any);
      }));
    }));
  };
}
