import { create, destroy, instanceData, save, update } from '@/core/actions';

export default {
  ...create.extension,
  ...update.extension,
  ...save.extension,
  ...destroy.extension,
  ...instanceData.extension,
};
