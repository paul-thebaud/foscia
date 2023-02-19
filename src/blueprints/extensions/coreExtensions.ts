import { context, forId, include, forInstance, forModel, target, when } from '@/core';

export default {
  ...context.extension,
  ...when.extension,
  ...forModel.extension,
  ...forInstance.extension,
  ...target.extension,
  ...include.extension,
  ...forId.extension,
};
