import { Dictionary } from '@/utilities/types';

export default function assignConfig(obj: object, config?: Dictionary) {
  if (!config) {
    return;
  }

  Object.assign(obj, Object.entries(config).reduce((newConfig, [key, value]) => {
    if (value !== undefined) {
      // eslint-disable-next-line no-param-reassign
      newConfig[key] = value;
    }

    return newConfig;
  }, {} as Dictionary));
}
