import { ModelClass } from '@/core/model/types';
import { KeyNormalizerI } from '@/core/types';
import { isNone } from '@/utilities';
import { Awaitable } from '@/utilities/types';

export default class KeyNormalizer implements KeyNormalizerI {
  public normalizeKey(model: ModelClass, key: string): Awaitable<string> {
    const def = model.$schema[key];

    return isNone(def.alias) ? key : def.alias;
  }
}
