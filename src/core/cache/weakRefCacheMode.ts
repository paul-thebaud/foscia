import { RefsCacheMode } from '@/core/cache/types';
import { ModelInstance } from '@/core/model/types';

const weakRefCacheMode: RefsCacheMode<WeakRef<ModelInstance>> = {
  ref: (instance: ModelInstance) => new WeakRef(instance),
  value: (ref: WeakRef<ModelInstance>) => ref.deref(),
};

export default weakRefCacheMode;
