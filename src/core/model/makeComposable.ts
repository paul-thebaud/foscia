import { ModelInstance } from '@/core/model/types';

export default function makeComposable<D extends {} = {}>(
  extendsFrom?: D & ThisType<ModelInstance<D>>,
) {
  return extendsFrom ?? {} as D;
}
