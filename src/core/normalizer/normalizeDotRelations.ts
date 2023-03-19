import detectTargetModel from '@/core/actions/context/utilities/detectTargetModel';
import logger from '@/core/logger/logger';
import isRelationDef from '@/core/model/guards/isRelationDef';
import { ModelClass } from '@/core/model/types';
import normalizeKeys from '@/core/normalizer/normalizeKeys';
import { isNone } from '@/utilities';

export default function normalizeDotRelations(
  context: {},
  model: ModelClass,
  relations: string[],
): Promise<string[]> {
  return Promise.all(relations.map(async (dotKey) => {
    const [currentKey, ...subKeys] = dotKey.split('.');
    const [normalizedKey] = (await normalizeKeys(context, model, [currentKey]));
    const def = model.$schema[currentKey];
    if (!isRelationDef(def)) {
      logger.warn(
        `Trying to normalize non-relation \`${model.$config.type}.${currentKey}\`. Either this is not a relation or relation is not declared.`,
      );

      return dotKey;
    }

    const subDotKey = subKeys.join('.');
    if (isNone(subDotKey)) {
      return normalizedKey;
    }

    const subModel = await detectTargetModel(context, def.type);
    if (!subModel) {
      logger.info(
        `Could not detect model for relation \`${model.$config.type}.${currentKey}\`. Skipping sub-keys normalization.`,
      );

      return [normalizedKey, ...subKeys].join('.');
    }

    return [
      normalizedKey,
      ...await normalizeDotRelations(context, subModel, [subKeys.join('.')]),
    ].join('.');
  }));
}
