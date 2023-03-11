import { context, find, forId, forInstance, forModel, forRelation, include, target, when } from '@/core';

export default {
  ...when.extension,
  ...forModel.extension,
  ...forInstance.extension,
  ...forRelation.extension,
  ...forId.extension,
  ...find.extension,
  ...include.extension,
  ...target.extension,
  ...context.extension,
};
