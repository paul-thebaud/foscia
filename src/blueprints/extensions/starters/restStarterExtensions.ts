import coreExtensions from '@/blueprints/extensions/coreExtension';
import crudExtensions from '@/blueprints/extensions/crudExtension';
import hooksExtensions from '@/blueprints/extensions/hooksExtension';
import httpExtensions from '@/blueprints/extensions/httpExtension';

export default {
  ...coreExtensions,
  ...crudExtensions,
  ...hooksExtensions,
  ...httpExtensions,
};
