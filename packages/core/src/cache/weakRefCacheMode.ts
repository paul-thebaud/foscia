import { RefsCacheMode } from '@foscia/core/cache/types';
import { ModelInstance } from '@foscia/core/model/types';

const weakRefCacheMode: RefsCacheMode<WeakRef<ModelInstance>> = {
  ref: (instance: ModelInstance) => new WeakRef(instance),
  value: (ref: WeakRef<ModelInstance>) => ref.deref(),
};

export default weakRefCacheMode;
