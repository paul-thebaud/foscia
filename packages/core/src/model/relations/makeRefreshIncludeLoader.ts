import { all, forModel, include, when } from '@foscia/core/actions';
import {
  Action,
  ActionFactory,
  ConsumeAdapter,
  ConsumeDeserializer,
  ConsumeModel,
} from '@foscia/core/actions/types';
import logger from '@foscia/core/logger/logger';
import loadUsingValue from '@foscia/core/model/relations/loadUsingValue';
import {
  Model,
  ModelIdType,
  ModelInstance,
  ModelRelationDotKey,
  ModelRelationKey,
} from '@foscia/core/model/types';
import { DeserializedData } from '@foscia/core/types';
import {
  Arrayable,
  ArrayableVariadic,
  Awaitable,
  uniqueValues,
  wrap,
  wrapVariadic,
} from '@foscia/utils';

type IncludeLoaderOptions<
  AD,
  DD extends DeserializedData,
  C extends ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD>,
> = {
  chunk?: (instances: ModelInstance[]) => ModelInstance[][];
  prepare?: (
    action: Action<C & ConsumeModel>,
    context: { instances: ModelInstance[]; relations: string[] },
  ) => Awaitable<void>;
};

async function refreshLoad<
  AD,
  DD extends DeserializedData,
  C extends ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD>,
  I extends ModelInstance,
>(
  action: ActionFactory<[], C, {}>,
  options: IncludeLoaderOptions<AD, DD, C>,
  instances: I[],
  relations: ModelRelationDotKey<I>[],
) {
  const model = instances[0].$model;
  const refreshedInstances = await action()
    .use(forModel(model as Model))
    .use(include(wrapVariadic(...relations) as any))
    .use(when(() => options.prepare, async (a, p) => {
      await p(a as Action<C & ConsumeModel>, { instances, relations });
    }))
    .run(all());

  const refreshedInstancesMap = refreshedInstances.reduce((instancesMap, instance) => ({
    ...instancesMap,
    [instance.id]: instance,
  }), {} as Record<ModelIdType, I>);
  const relationRootKeys = uniqueValues(relations.map(
    (relation) => relation.split('.')[0],
  )) as ModelRelationKey<I>[];

  instances.forEach((instance) => {
    const refreshedInstance = refreshedInstancesMap[instance.id];
    if (!refreshedInstance) {
      logger.warn(`Loading relations of instance with ID \`${instance.id}\` did not work, instance was not found in refreshed list.`);

      return;
    }

    relationRootKeys.forEach((relation) => {
      loadUsingValue(instance, relation, refreshedInstance[relation]);
    });
  });
}

export default function makeRefreshIncludeLoader<
  AD,
  DD extends DeserializedData,
  C extends ConsumeAdapter<AD> & ConsumeDeserializer<AD, DD>,
>(
  action: ActionFactory<[], C, {}>,
  options: IncludeLoaderOptions<AD, DD, C>,
) {
  return async <I extends ModelInstance>(
    instances: Arrayable<I>,
    ...relations: ArrayableVariadic<ModelRelationDotKey<I>>
  ) => {
    const allInstances = wrap(instances);
    const allRelations = wrapVariadic(...relations);
    if (!allInstances.length || !allRelations.length) {
      return;
    }

    const chunk = (options.chunk ?? ((i) => [i])) as (instances: I[]) => I[][];

    await Promise.all(chunk(allInstances).map(async (chunkInstances) => {
      await refreshLoad(action, options, chunkInstances, allRelations);
    }));
  };
}
