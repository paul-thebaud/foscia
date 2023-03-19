import context from '@/core/actions/context/enhancers/context';
import forInstance from '@/core/actions/context/enhancers/forInstance';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeId,
  ConsumeInstance,
  ConsumeModel,
} from '@/core/actions/types';
import {
  Model,
  ModelClassInstance,
  ModelInstance,
  ModelRelation,
  ModelRelationKey,
  ModelSchema,
} from '@/core/model/types';

/**
 * Target the given instance's relation.
 * Use its type and other applicable model/relation context.
 *
 * @param instance
 * @param relationKey
 *
 * @category Enhancers
 */
export default function forRelation<
  C extends {},
  D extends {},
  I extends ModelInstance<D>,
  K extends keyof ModelSchema<D>,
>(instance: ModelClassInstance<D> & I, relationKey: K & ModelRelationKey<I>) {
  return (action: Action<C>) => {
    const relation = instance.$model.$schema[relationKey] as D[K];

    return action
      .use(forInstance(instance as I))
      .use(context({
        relationPath: (relation as ModelRelation).path ?? relationKey,
        relation,
      }));
  };
}

type EnhancerExtension = ActionParsedExtension<{
  forRelation<C extends {}, E extends {}, D extends {}, I extends ModelInstance<D>>(
    this: Action<C, E>,
    instance: ModelClassInstance<D> & I,
    relation: ModelRelationKey<I>,
  ): Action<C & ConsumeModel<Model<D, I>> & ConsumeInstance<I> & ConsumeId, E>;
}>;

forRelation.extension = makeEnhancersExtension({ forRelation }) as EnhancerExtension;
