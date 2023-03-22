import { consumeModel, consumeRegistry, consumeRelation } from '@/core/actions';
import logger from '@/core/logger/logger';
import detectModel from '@/core/model/types/detectModel';
import normalizeDotRelations from '@/core/normalization/normalizeDotRelations';

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

  logger.info(
    'Could not detect model for context. Skipping include normalization.',
  );

  return include;
}
