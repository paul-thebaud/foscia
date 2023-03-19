import detectTargetModel from '@/core/actions/context/utilities/detectTargetModel';
import detectTargetType from '@/core/actions/context/utilities/detectTargetType';
import logger from '@/core/logger/logger';
import normalizeDotRelations from '@/core/normalizer/normalizeDotRelations';

export default async function normalizeInclude(
  context: {},
  include: string[],
) {
  const modelType = detectTargetType(context);
  const model = await detectTargetModel(context, modelType);
  if (model) {
    return normalizeDotRelations(context, model, include);
  }

  logger.info(
    'Could not detect model for context. Skipping include normalization.',
  );

  return include;
}
