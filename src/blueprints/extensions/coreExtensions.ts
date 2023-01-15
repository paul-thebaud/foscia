import { context, forId, include, instance, model, target, when } from '@/core';

export default {
  ...context.extension,
  ...when.extension,
  ...model.extension,
  ...instance.extension,
  ...target.extension,
  ...include.extension,
  ...forId.extension,
};
