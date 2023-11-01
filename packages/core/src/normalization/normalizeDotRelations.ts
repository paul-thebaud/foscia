import logger from '@foscia/core/logger/logger';
import isRelationDef from '@foscia/core/model/props/checks/isRelationDef';
import { ModelClass, ModelRelationDotKey, ModelRelationKey } from '@foscia/core/model/types';
import detectModel from '@foscia/core/model/types/detectModel';
import normalizeKey from '@foscia/core/normalization/normalizeKey';
import { RegistryI } from '@foscia/core/types';
import { isNone, Optional } from '@foscia/shared';

export default function normalizeDotRelations<D extends {}>(
  model: ModelClass<D>,
  relations: ModelRelationDotKey<ModelClass<D>>[],
  registry?: Optional<RegistryI>,
): Promise<string[]> {
  return Promise.all(relations.map(async (dotKey) => {
    const [currentKey, ...subKeys] = dotKey.split('.');
    const def = model.$schema[currentKey as ModelRelationKey<ModelClass<D>>];
    if (!def || !isRelationDef(def)) {
      logger.warn(
        `Trying to normalize non-relation \`${model.$type}.${def?.key ?? currentKey}\`. Either this is not a relation or relation is not declared.`,
      );

      return dotKey;
    }

    const normalizedKey = normalizeKey(model, def.key);
    const subDotKey = subKeys.join('.');
    if (isNone(subDotKey)) {
      return normalizedKey;
    }

    const subModel = await detectModel(model, def, registry);
    if (!subModel) {
      logger.debug(
        `Could not detect model for relation \`${model.$type}.${def.key}\`. Skipping sub-keys normalization.`,
      );

      return [normalizedKey, ...subKeys].join('.');
    }

    return [
      normalizedKey,
      ...await normalizeDotRelations(subModel, [subKeys.join('.')], registry),
    ].join('.');
  }));
}
