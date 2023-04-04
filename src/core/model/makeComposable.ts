import makeDefinition from '@/core/model/makeDefinition';
import { ModelInstance, ModelParsedDefinition } from '@/core/model/types';

/**
 * Create a composable definition which will be used by a model factory.
 *
 * @param rawDefinition
 */
export default function makeComposable<D extends {} = {}>(
  rawDefinition?: D & ThisType<ModelInstance<ModelParsedDefinition<D>>>,
) {
  return makeDefinition(rawDefinition) as ModelParsedDefinition<D>;
}
