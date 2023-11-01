export type DescriptorHolder<T = unknown> = {
  $MODEL_TYPE: 'descriptor';
  descriptor: PropertyDescriptor;
  __type__: T;
};
