import { context, forId, include, instance, model, target } from '@/core';

export default {
  ...context.extension,
  ...model.extension,
  ...instance.extension,
  ...target.extension,
  ...include.extension,
  ...forId.extension,
};
