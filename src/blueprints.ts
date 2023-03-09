import coreExtensions from '@/blueprints/extensions/coreExtension';
import crudExtensions from '@/blueprints/extensions/crudExtension';
import hooksExtensions from '@/blueprints/extensions/hooksExtension';
import httpExtensions from '@/blueprints/extensions/httpExtension';
import jsonApiExtensions from '@/blueprints/extensions/jsonApiExtension';
import jsonRestExtensions from '@/blueprints/extensions/jsonRestExtension';
import readExtensions from '@/blueprints/extensions/readExtension';
import jsonApiStarterExtensions from '@/blueprints/extensions/starters/jsonApiStarterExtensions';
import jsonRestStarterExtensions from '@/blueprints/extensions/starters/jsonRestStarterExtensions';
import writeExtensions from '@/blueprints/extensions/writeExtension';
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
  readExtensions,
  writeExtensions,
  crudExtensions,
  hooksExtensions,
  httpExtensions,
  jsonApiExtensions,
  jsonRestExtensions,
  jsonApiStarterExtensions,
  jsonRestStarterExtensions,
};
