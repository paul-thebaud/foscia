import { ModelInstance, ModelSnapshot } from '@/core/model/types';
import cloneModelValue from '@/core/model/snapshots/cloneModelValue';

export default function takeSnapshot<I extends ModelInstance>(
  instance: I,
): ModelSnapshot<I> {
  return {
    id: instance.id,
    lid: instance.lid,
    exists: instance.exists,
    $raw: instance.$raw,
    $loaded: { ...instance.$loaded },
    $values: Object.entries(instance.$values).reduce((newValues, [key, value]) => ({
      ...newValues,
      [key]: cloneModelValue(instance.$model, value),
    }), {}),
  };
}
