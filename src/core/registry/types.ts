import { Model } from '@/core/model/types';
import { Normalizer } from '@/core/normalization/types';
import { Awaitable, Optional } from '@/utilities/types';

export type ModelResolver = () => Promise<Model>;

export type ModelPreparator = (model: Model) => Awaitable<void>;

export type MapRegistryConfig = {
  normalizeType?: Optional<Normalizer<string>>;
  prepareModel?: Optional<ModelPreparator>;
};
