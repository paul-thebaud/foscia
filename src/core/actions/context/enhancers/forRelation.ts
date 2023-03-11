import context from '@/core/actions/context/enhancers/context';
import forInstance from '@/core/actions/context/enhancers/forInstance';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import { Action, ActionParsedExtension, ConsumeId, ConsumeInstance, ConsumeModel } from '@/core/actions/types';
import { Model, ModelClassInstance, ModelInstance, ModelRelationKey } from '@/core/model/types';

/**
 * Target the given instance's relation.
 * Use its type and other applicable model/relation context.
 *
 * @param instance
 * @param relation
 *
 * @category Enhancers
 *
 * TODO forRelation should extract the used model from the relation type.
 */
export default function forRelation<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
>(instance: ModelClassInstance<D> & I, relation: ModelRelationKey<I>) {
  return (action: Action<C>) => action
    .use(forInstance(instance))
    .use(context({ relation }));
}

type ForRelationEnhancerExtension = ActionParsedExtension<{
  forRelation<C extends {}, E extends {}, D extends {}, I extends ModelInstance<D>>(
    this: Action<C, E>,
    instance: ModelClassInstance<D> & I,
    relation: ModelRelationKey<I>,
  ): Action<C & ConsumeModel<Model<D, I>> & ConsumeInstance<I> & ConsumeId, E>;
}>;

forRelation.extension = makeEnhancersExtension({ forRelation }) as ForRelationEnhancerExtension;
