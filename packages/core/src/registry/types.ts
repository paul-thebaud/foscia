import { Model } from '@foscia/core/model/types';
import { Normalizer } from '@foscia/core/normalization/types';
import { Awaitable, Optional } from '@foscia/utils';

export type ModelResolver = () => Promise<Model>;

export type ModelPreparator = (model: Model) => Awaitable<void>;

export type MapRegistryConfig = {
  normalizeType?: Optional<Normalizer<string>>;
  prepareModel?: Optional<ModelPreparator>;
};
