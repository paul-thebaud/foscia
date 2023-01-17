import coreExtensions from '@/blueprints/extensions/coreExtensions';
import crudExtensions from '@/blueprints/extensions/crudExtensions';
import hooksExtensions from '@/blueprints/extensions/hooksExtensions';
import jsonApiExtensions from '@/blueprints/extensions/jsonApiExtensions';
import jsonRestExtensions from '@/blueprints/extensions/jsonRestExtensions';
import readExtensions from '@/blueprints/extensions/readExtensions';
import writeExtensions from '@/blueprints/extensions/writeExtensions';
import makeJsonApi from '@/blueprints/jsonapi/makeJsonApi';
import makeJsonRest from '@/blueprints/jsonrest/makeJsonRest';
import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';

export {
  makeCache,
  makeRegistry,
  makeJsonApi,
  makeJsonRest,
  coreExtensions,
  crudExtensions,
  hooksExtensions,
  jsonApiExtensions,
  jsonRestExtensions,
  readExtensions,
  writeExtensions,
};
