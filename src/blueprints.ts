import coreExtensions from '@/blueprints/extensions/coreExtension';
import crudExtensions from '@/blueprints/extensions/crudExtension';
import hooksExtensions from '@/blueprints/extensions/hooksExtension';
import httpExtensions from '@/blueprints/extensions/httpExtension';
import jsonApiExtensions from '@/blueprints/extensions/jsonApiExtension';
import readExtensions from '@/blueprints/extensions/readExtension';
import restExtension from '@/blueprints/extensions/restExtension';
import jsonApiStarterExtensions from '@/blueprints/extensions/starters/jsonApiStarterExtensions';
import restStarterExtensions from '@/blueprints/extensions/starters/restStarterExtensions';
import writeExtensions from '@/blueprints/extensions/writeExtension';
import makeHttpClient from '@/blueprints/http/makeHttpClient';
import appendJsonApiParams from '@/blueprints/jsonapi/appendJsonApiParams';
import makeJsonApi from '@/blueprints/jsonapi/makeJsonApi';
import makeCache from '@/blueprints/makeCache';
import makeRegistry from '@/blueprints/makeRegistry';
import makeJsonRest from '@/blueprints/rest/makeJsonRest';

export {
  makeCache,
  makeRegistry,
  makeJsonApi,
  appendJsonApiParams,
  makeJsonRest,
  makeHttpClient,
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
