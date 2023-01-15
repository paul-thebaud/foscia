import { DescriptorHolder } from '@/utilities/descriptors/types';

export default function makeDescriptorHolder<T>(descriptor: PropertyDescriptor) {
  return { $MODEL_TYPE: 'descriptor', descriptor } as DescriptorHolder<T>;
}
