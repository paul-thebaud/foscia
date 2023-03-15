import coreExtensions from '@/blueprints/extensions/coreExtension';
import crudExtensions from '@/blueprints/extensions/crudExtension';
import hooksExtensions from '@/blueprints/extensions/hooksExtension';
import httpExtensions from '@/blueprints/extensions/httpExtension';
import jsonApiExtensions from '@/blueprints/extensions/jsonApiExtension';
import restExtension from '@/blueprints/extensions/restExtension';
import readExtensions from '@/blueprints/extensions/readExtension';
import jsonApiStarterExtensions from '@/blueprints/extensions/starters/jsonApiStarterExtensions';
import restStarterExtensions from '@/blueprints/extensions/starters/restStarterExtensions';
import writeExtensions from '@/blueprints/extensions/writeExtension';
import makeJsonApi from '@/blueprints/jsonapi/makeJsonApi';
import makeJsonRest from '@/blueprints/rest/makeJsonRest';
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
  restExtension,
  jsonApiStarterExtensions,
  restStarterExtensions,
};
