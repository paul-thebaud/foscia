import { RefManager, RefsCacheConfig } from '@foscia/core/cache/types';
import weakRefManager from '@foscia/core/cache/weakRefManager';
import { ModelIdType, ModelInstance } from '@foscia/core/model/types';
import { CacheI } from '@foscia/core/types';
import { applyConfig, IdentifiersMap } from '@foscia/utils';

export default class RefsCache implements CacheI {
  private readonly instances: IdentifiersMap<string, ModelIdType, unknown>;

  private manager: RefManager<unknown> = weakRefManager;

  public constructor(config?: RefsCacheConfig) {
    this.instances = new IdentifiersMap();
    this.configure(config ?? {});
  }

  public configure(config: RefsCacheConfig, override = true) {
    applyConfig(this, config, override);
  }

  public async find(type: string, id: ModelIdType) {
    const ref = this.instances.get(type, id);
    if (!ref) {
      return null;
    }

    const instance = await this.manager.value(ref);
    if (!instance) {
      await this.forget(type, id);

      return null;
    }

    return instance;
  }

  public async put(type: string, id: ModelIdType, instance: ModelInstance) {
    this.instances.set(type, id, await this.manager.ref(instance));
  }

  public async forget(type: string, id: ModelIdType) {
    this.instances.delete(type, id);
  }

  public async forgetAll(type: string) {
    this.instances.deleteAll(type);
  }

  public async clear() {
    this.instances.clear();
  }
}
