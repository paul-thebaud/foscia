import coreExtensions from '@foscia/blueprints/extensions/coreExtension';
import crudExtensions from '@foscia/blueprints/extensions/crudExtension';
import hooksExtensions from '@foscia/blueprints/extensions/hooksExtension';
import httpExtensions from '@foscia/blueprints/extensions/httpExtension';
import jsonApiExtensions from '@foscia/blueprints/extensions/jsonApiExtension';
import readExtensions from '@foscia/blueprints/extensions/readExtension';
import restExtension from '@foscia/blueprints/extensions/restExtension';
import jsonApiStarterExtensions
  from '@foscia/blueprints/extensions/starters/jsonApiStarterExtensions';
import restStarterExtensions from '@foscia/blueprints/extensions/starters/restStarterExtensions';
import writeExtensions from '@foscia/blueprints/extensions/writeExtension';
import makeHttpClient from '@foscia/blueprints/http/makeHttpClient';
import appendJsonApiParams from '@foscia/blueprints/jsonapi/appendJsonApiParams';
import makeJsonApi from '@foscia/blueprints/jsonapi/makeJsonApi';
import makeCache from '@foscia/blueprints/makeCache';
import makeRegistry from '@foscia/blueprints/makeRegistry';
import makeJsonRest from '@foscia/blueprints/rest/makeJsonRest';

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
