import { DescriptorHolder } from '@/utilities/descriptors/types';
import isNil from '@/utilities/checks/isNil';

export default function isDescriptorHolder(
  value: unknown,
): value is DescriptorHolder {
  return !isNil(value) && typeof value === 'object' && (value as any).$MODEL_TYPE === 'descriptor';
}
