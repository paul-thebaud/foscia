import isDescriptorHolder from '@foscia/utils/descriptors/isDescriptorHolder';
import isNil from '@foscia/utils/checks/isNil';

export default function eachDescriptors(
  obj: object,
  callback: (key: string, descriptor: PropertyDescriptor) => void,
) {
  Object.entries(Object.getOwnPropertyDescriptors(obj ?? {}))
    .forEach(([key, descriptor]) => {
      if (!isNil(descriptor.value) && isDescriptorHolder(descriptor.value)) {
        callback(key, descriptor.value.descriptor);
      } else {
        callback(key, descriptor);
      }
    });
}
