import applyConfig from '@/utilities/applyConfig';
import eachDescriptors from '@/utilities/descriptors/eachDescriptors';
import isDescriptorHolder from '@/utilities/descriptors/isDescriptorHolder';
import makeDescriptorHolder from '@/utilities/descriptors/makeDescriptorHolder';
import IdentifiersMap from '@/utilities/identifiersMap';
import isNil from '@/utilities/isNil';
import isNone from '@/utilities/isNone';
import optionalJoin from '@/utilities/optionalJoin';
import pluralize from '@/utilities/pluralize';
import sequentialTransform from '@/utilities/sequentialTransform';
import toKebab from '@/utilities/toKebab';
import uniqueValues from '@/utilities/uniqueValues';
import value from '@/utilities/value';
import wrap from '@/utilities/wrap';
import wrapVariadic from '@/utilities/wrapVariadic';

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
  toKebab,
  uniqueValues,
  value,
  wrap,
  wrapVariadic,
};
