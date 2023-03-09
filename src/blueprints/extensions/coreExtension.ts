import { context, find, forId, forInstance, forModel, include, target, when } from '@/core';

export default {
  ...when.extension,
  ...forModel.extension,
  ...forInstance.extension,
  ...forId.extension,
  ...find.extension,
  ...include.extension,
  ...target.extension,
  ...context.extension,
};
