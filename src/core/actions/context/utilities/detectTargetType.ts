import consumeModel from '@/core/actions/context/consumers/consumeModel';
import consumeRelation from '@/core/actions/context/consumers/consumeRelation';
import detectRelationType from '@/core/model/utilities/detectRelationType';

export default function detectTargetType(context: {}) {
  const model = consumeModel(context, null);
  const relation = consumeRelation(context, null);
  if (relation) {
    return detectRelationType(relation, model);
  }

  if (model) {
    return model.$type;
  }

  return undefined;
}
