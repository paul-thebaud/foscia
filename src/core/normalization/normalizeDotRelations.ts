import detectTargetModel from '@/core/actions/context/utilities/detectTargetModel';
import logger from '@/core/logger/logger';
import isRelationDef from '@/core/model/guards/isRelationDef';
import { ModelClass, ModelRelationDotKey, ModelRelationKey } from '@/core/model/types';
import detectRelationType from '@/core/model/utilities/detectRelationType';
import normalizeKey from '@/core/normalization/normalizeKey';
import { isNone } from '@/utilities';

export default function normalizeDotRelations<D extends {}>(
  context: {},
  model: ModelClass<D>,
  relations: ModelRelationDotKey<ModelClass<D>>[],
): Promise<string[]> {
  return Promise.all(relations.map(async (dotKey) => {
    const [currentKey, ...subKeys] = dotKey.split('.');
    const def = model.$schema[currentKey as ModelRelationKey<ModelClass<D>>];
    if (!isRelationDef(def)) {
      logger.warn(
        `Trying to normalize non-relation \`${model.$type}.${def.key}\`. Either this is not a relation or relation is not declared.`,
      );

      return dotKey;
    }

    const normalizedKey = normalizeKey(model, def.key);
    const subDotKey = subKeys.join('.');
    if (isNone(subDotKey)) {
      return normalizedKey;
    }

    const subModel = await detectTargetModel(context, detectRelationType(def, model));
    if (!subModel) {
      logger.info(
        `Could not detect model for relation \`${model.$type}.${def.key}\`. Skipping sub-keys normalization.`,
      );

      return [normalizedKey, ...subKeys].join('.');
    }

    return [
      normalizedKey,
      ...await normalizeDotRelations(context, subModel, [subKeys.join('.')]),
    ].join('.');
  }));
}
