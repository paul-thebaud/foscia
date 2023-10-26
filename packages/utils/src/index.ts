import applyConfig from '@foscia/utils/applyConfig';
import sequentialTransform from '@foscia/utils/arrays/sequentialTransform';
import uniqueValues from '@foscia/utils/arrays/uniqueValues';
import wrap from '@foscia/utils/arrays/wrap';
import wrapVariadic from '@foscia/utils/arrays/wrapVariadic';
import isNil from '@foscia/utils/checks/isNil';
import isNone from '@foscia/utils/checks/isNone';
import eachDescriptors from '@foscia/utils/descriptors/eachDescriptors';
import isDescriptorHolder from '@foscia/utils/descriptors/isDescriptorHolder';
import makeDescriptorHolder from '@foscia/utils/descriptors/makeDescriptorHolder';
import { IS_DEV, IS_TEST } from '@foscia/utils/env';
import IdentifiersMap from '@foscia/utils/identifiersMap';
import optionalJoin from '@foscia/utils/strings/optionalJoin';
import pluralize from '@foscia/utils/strings/pluralize';
import toKebabCase from '@foscia/utils/strings/toKebabCase';
import value from '@foscia/utils/value';

export * from '@foscia/utils/descriptors/types';
export * from '@foscia/utils/types';

export {
  IS_DEV,
  IS_TEST,
  applyConfig,
  eachDescriptors,
  isDescriptorHolder,
  makeDescriptorHolder,
  IdentifiersMap,
  isNil,
  isNone,
  optionalJoin,
  pluralize,
  sequentialTransform,
  toKebabCase,
  uniqueValues,
  value,
  wrap,
  wrapVariadic,
};
