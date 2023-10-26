import coreExtensions from '@foscia/blueprints/extensions/coreExtension';
import crudExtensions from '@foscia/blueprints/extensions/crudExtension';
import hooksExtensions from '@foscia/blueprints/extensions/hooksExtension';
import httpExtensions from '@foscia/blueprints/extensions/httpExtension';
import jsonApiExtensions from '@foscia/blueprints/extensions/jsonApiExtension';

export default {
  ...coreExtensions,
  ...crudExtensions,
  ...hooksExtensions,
  ...httpExtensions,
  ...jsonApiExtensions,
};
