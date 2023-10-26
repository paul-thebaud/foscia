import detectRelationType from '@foscia/core/model/types/detectRelationType';
import consumeModel from './consumeModel';
import consumeRelation from './consumeRelation';

export default function consumeType<C extends {}>(context: C) {
  const model = consumeModel(context, null);
  const relation = consumeRelation(context, null);
  if (relation) {
    return detectRelationType(model, relation);
  }

  if (model) {
    return model.$type;
  }

  return undefined;
}
