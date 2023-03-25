import {
  catchWith,
  context,
  find,
  forId,
  forInstance,
  forModel,
  forRelation,
  include,
  target,
  when,
} from '@/core';

export default {
  ...forModel.extension,
  ...forInstance.extension,
  ...forRelation.extension,
  ...forId.extension,
  ...find.extension,
  ...include.extension,
  ...target.extension,
  ...context.extension,
  ...when.extension,
  ...catchWith.extension,
};
