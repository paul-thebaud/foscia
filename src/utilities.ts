import applyConfig from '@/utilities/applyConfig';
import eachDescriptors from '@/utilities/descriptors/eachDescriptors';
import isDescriptorHolder from '@/utilities/descriptors/isDescriptorHolder';
import makeDescriptorHolder from '@/utilities/descriptors/makeDescriptorHolder';
import IdentifiersMap from '@/utilities/identifiersMap';
import isNil from '@/utilities/checks/isNil';
import isNone from '@/utilities/checks/isNone';
import optionalJoin from '@/utilities/strings/optionalJoin';
import pluralize from '@/utilities/strings/pluralize';
import sequentialTransform from '@/utilities/arrays/sequentialTransform';
import toKebabCase from '@/utilities/strings/toKebabCase';
import uniqueValues from '@/utilities/arrays/uniqueValues';
import value from '@/utilities/value';
import wrap from '@/utilities/arrays/wrap';
import wrapVariadic from '@/utilities/arrays/wrapVariadic';

export * from '@/utilities/descriptors/types';
export * from '@/utilities/types';

export {
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
