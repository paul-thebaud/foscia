import context from '@/core/actions/context/enhancers/context';
import forInstance from '@/core/actions/context/enhancers/forInstance';
import makeEnhancersExtension from '@/core/actions/extensions/makeEnhancersExtension';
import {
  Action,
  ActionParsedExtension,
  ConsumeId,
  ConsumeInstance,
  ConsumeModel,
  ConsumeRelation,
} from '@/core/actions/types';
import {
  Model,
  ModelClassInstance,
  ModelInstance,
  ModelRelation,
  ModelRelationKey,
  ModelSchema,
  ModelSchemaRelations,
} from '@/core/model/types';
import normalize from '@/core/normalization/normalize';

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
>(instance: ModelClassInstance<D> & I, relationKey: ModelRelationKey<D> & K) {
  return (action: Action<C>) => {
    const relation = instance.$model.$schema[relationKey] as D[K];

    return action
      .use(forInstance(instance))
      .use(context({
        relationPath: normalize(
          (relation as ModelRelation).path ?? relationKey,
          instance.$model.$config.normalizeRelationPath ?? instance.$model.$config.normalizePath,
        ),
        relation,
      }));
  };
}

type EnhancerExtension = ActionParsedExtension<{
  forRelation<
    C extends {},
    E extends {},
    D extends {},
    RD extends ModelSchemaRelations<D>,
    I extends ModelInstance<D>,
    K extends keyof ModelSchema<D> & keyof RD & string,
  >(
    this: Action<C, E>,
    instance: ModelClassInstance<D> & I,
    relation: ModelRelationKey<D> & K,
    // eslint-disable-next-line max-len
  ): Action<C & ConsumeModel<Model<D, I>> & ConsumeRelation<RD[K]> & ConsumeInstance<I> & ConsumeId, E>;
}>;

forRelation.extension = makeEnhancersExtension({ forRelation }) as EnhancerExtension;
