import makeExtension from '@/core/actions/extensions/makeExtension';
import { Action } from '@/core/actions/types';
import { Dictionary } from '@/utilities';

/**
 * Takes a dictionary of enhancers and returns an extension providing
 * those enhancers features.
 *
 * @param enhancersMap
 *
 * @todo This function returns value should be generically typed.
 */
export default function makeEnhancersExtension<
  E extends Dictionary<any> = {},
>(enhancersMap: E) {
  return makeExtension(
    Object.entries(enhancersMap).reduce((extension, [key, enhancer]) => {
      Object.assign(extension, {
        [key](this: Action<any>, ...args: any[]) {
          return this.use(enhancer(...args));
        },
      });

      return extension;
    }, {}),
  );
}
