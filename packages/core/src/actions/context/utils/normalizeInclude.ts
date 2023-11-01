import { consumeModel, consumeRegistry, consumeRelation } from '@foscia/core/actions';
import logger from '@foscia/core/logger/logger';
import detectModel from '@foscia/core/model/types/detectModel';
import normalizeDotRelations from '@foscia/core/normalization/normalizeDotRelations';

export default async function normalizeInclude(
  context: {},
  include: string[],
) {
  const registry = consumeRegistry(context, null);
  const model = await detectModel(
    consumeModel(context, null),
    consumeRelation(context, null),
    registry,
  );
  if (model) {
    return normalizeDotRelations(model, include, registry);
  }

  logger.warn(
    'Could not detect model for context. Skipping include normalization.',
  );

  return include;
}
