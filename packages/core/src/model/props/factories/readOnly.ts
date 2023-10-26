import { ModelPropRaw } from '@foscia/core/model/types';

export default function readOnly<T, P extends ModelPropRaw<T, any>, R extends boolean = true>(
  rawDefinition: P,
  isReadOnly?: R,
): Omit<P, 'readOnly'> & { readOnly: R } {
  return { ...rawDefinition, readOnly: isReadOnly ?? false };
}
