import cloneModelValue from '@/core/model/snapshots/cloneModelValue';
import { ModelInstance, ModelSnapshot } from '@/core/model/types';

export default function takeSnapshot<I extends ModelInstance>(
  instance: I,
): ModelSnapshot<I> {
  return {
    exists: instance.exists,
    $raw: instance.$raw,
    $loaded: { ...instance.$loaded },
    $values: Object.entries(instance.$values).reduce((newValues, [key, value]) => ({
      ...newValues,
      [key]: cloneModelValue(instance.$model, value),
    }), {}),
  };
}
