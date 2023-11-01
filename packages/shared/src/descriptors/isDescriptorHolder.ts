import { DescriptorHolder } from '@foscia/shared/descriptors/types';
import isNil from '@foscia/shared/checks/isNil';

export default function isDescriptorHolder(
  value: unknown,
): value is DescriptorHolder {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'descriptor';
}
