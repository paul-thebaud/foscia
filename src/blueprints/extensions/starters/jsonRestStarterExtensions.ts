import coreExtensions from '@/blueprints/extensions/coreExtension';
import crudExtensions from '@/blueprints/extensions/crudExtension';
import hooksExtensions from '@/blueprints/extensions/hooksExtension';
import httpExtensions from '@/blueprints/extensions/httpExtension';
import jsonRestExtensions from '@/blueprints/extensions/jsonRestExtension';

export default {
  ...coreExtensions,
  ...crudExtensions,
  ...hooksExtensions,
  ...httpExtensions,
  ...jsonRestExtensions,
};
