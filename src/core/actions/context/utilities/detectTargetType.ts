import consumeModel from '@/core/actions/context/consumers/consumeModel';
import consumeRelation from '@/core/actions/context/consumers/consumeRelation';

export default function detectTargetType(context: {}) {
  const relation = consumeRelation(context, null);
  if (relation) {
    return relation.type;
  }

  const model = consumeModel(context, null);
  if (model) {
    return model.$config.type;
  }

  return undefined;
}
