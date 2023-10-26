import { create, destroy, instanceData, save, update } from '@foscia/core';

export default {
  ...create.extension,
  ...update.extension,
  ...save.extension,
  ...destroy.extension,
  ...instanceData.extension,
};
