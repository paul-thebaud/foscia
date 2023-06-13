import { Hookable, HookCallback } from '@/core/hooks/types';
import { Normalizer } from '@/core/normalization/types';
import { Transform } from '@/core/transformers/types';
import { Constructor, DescriptorHolder, Dictionary, Optional, Prev } from '@/utilities';

/**
 * Configuration of a model class.
 */
export type ModelConfig = {
  /**
   * Path which is used to query the model.
   * Defaults to the model's type.
   */
  path?: Optional<string>;
  /**
   * Normalize a model/relation path when injecting it inside an action context.
   */
  normalizePath?: Optional<Normalizer<string>>;
  /**
   * Normalize a model path when injecting it inside an action context.
   * Prioritized over `normalizePath`.
   */
  normalizeModelPath?: Optional<Normalizer<string>>;
  /**
   * Normalize a relation path when injecting it inside an action context.
   * Prioritized over `normalizePath`.
   */
  normalizeRelationPath?: Optional<Normalizer<string>>;
  /**
   * Normalize an attribute/relation key when (de)serializing for data source.
   */
  normalizeKey?: Optional<Normalizer<string>>;
  /**
   * Normalize an attribute key when (de)serializing for data source.
   * Prioritized over `normalizeKey`.
   */
  normalizeAttributeKey?: Optional<Normalizer<string>>;
  /**
   * Normalize a relation key when (de)serializing for data source.
   * Prioritized over `normalizeKey`.
   */
  normalizeRelationKey?: Optional<Normalizer<string>>;
  /**
   * Guess the type for a given relation.
   */
  guessRelationType?: Optional<ModelRelationTypeGuesser>;
  /**
   * Compare two values when checking model instance changed values.
   *
   * @param nextValue
   * @param prevValue
   *
   * @see {@link changed}
   */
  compareValue?: Optional<((nextValue: unknown, prevValue: unknown) => boolean)>;
  /**
   * Clone two values when sync model instances values state.
   *
   * @param value
   *
   * @see {@link restore}
   * @see {@link markSynced}
   */
  cloneValue?: Optional<(<T>(value: T) => T)>;
  /**
   * Dedicated base URL. Will overwrite the default base URL.
   */
  baseURL?: Optional<string>;
};

/**
 * Guess a model's relation related type.
 */
export type ModelRelationTypeGuesser = (model: ModelClass, def: ModelRelation) => Optional<string>;

/**
 * Model instance ID default typing.
 */
export type ModelIdType = string | number;

/**
 * Sync precise configuration for a property (will only do defined action).
 */
export type ModelPropSync = 'retrieve' | 'write';

/**
 * Normalized part of a property's definition (attribute or relation).
 */
export type ModelPropNormalized<K = string> = {
  key: K;
};

/**
 * Raw definition for a model's property (attribute or relation).
 */
export type ModelPropRaw<T = unknown, R extends boolean = boolean> = {
  /**
   * Default value for the property.
   */
  default?: T | (() => T) | undefined;
  /**
   * Alias of the property (might be used when (de)serializing).
   */
  alias?: string | undefined;
  /**
   * Makes the property read-only.
   */
  readOnly?: R;
  /**
   * Tells if the property should be synced with the data store.
   */
  sync?: boolean | ModelPropSync;
};

/**
 * Raw Definition for a model's ID.
 */
export type ModelIdRaw<T extends ModelIdType | null = any, R extends boolean = boolean> = {
  $MODEL_TYPE: 'id';
  transformer?: Transform<T | null> | undefined;
} & ModelPropRaw<T, R>;

/**
 * Definition for a model's ID.
 */
export type ModelId<K = string, T extends ModelIdType | null = any, R extends boolean = boolean> =
  & ModelPropNormalized<K>
  & ModelIdRaw<T, R>;

/**
 * Raw definition for a model's attribute.
 */
export type ModelAttributeRaw<T = unknown, R extends boolean = boolean> = {
  /**
   * Internal type identifier for Foscia's type guards.
   */
  $MODEL_TYPE: 'attribute';
  transformer?: Transform<T | null> | undefined;
} & ModelPropRaw<T, R>;

/**
 * Definition for a model's attribute.
 */
export type ModelAttribute<K = string, T = any, R extends boolean = boolean> =
  & ModelPropNormalized<K>
  & ModelAttributeRaw<T, R>;

/**
 * Available model relation types.
 */
export type ModelRelationType = 'hasOne' | 'hasMany';

/**
 * Raw definition for a model's relation.
 */
export type ModelRelationRaw<T = any, R extends boolean = boolean> = {
  /**
   * Internal type identifier for Foscia's type guards.
   */
  $MODEL_TYPE: 'relation';
  $RELATION_TYPE: ModelRelationType;
  type?: string;
  path?: string;
} & ModelPropRaw<T, R>;

/**
 * Definition for a model's attribute.
 */
export type ModelRelation<K = string, T = any, R extends boolean = boolean> =
  & ModelPropNormalized<K>
  & ModelRelationRaw<T, R>;

/**
 * The parsed model definition with non attributes/relations properties'
 * descriptors wrapped in holders.
 */
export type ModelParsedDefinition<D extends {} = {}> = {
  [K in keyof D]: D[K] extends ModelAttributeRaw<any, any>
    ? D[K] & ModelPropNormalized<K> : D[K] extends ModelRelationRaw<any, any>
      ? D[K] & ModelPropNormalized<K> : D[K] extends ModelIdRaw<any, any>
        ? D[K] & ModelPropNormalized<K> : D[K] extends DescriptorHolder<any>
          ? D[K] : DescriptorHolder<D[K]>;
};

/**
 * Extract model's IDs, attributes and relations from the whole definition.
 */
export type ModelSchema<D extends {} = {}> = {
  [K in keyof D]: D[K] extends ModelAttribute<K, any, any>
    ? D[K] : D[K] extends ModelRelation<K, any, any>
      ? D[K] : D[K] extends ModelId<K, any, any>
        ? D[K] : never;
};

/**
 Extract model's relations from the whole definition.
 */
export type ModelSchemaRelations<D extends {} = {}> = {
  [K in keyof D]: D[K] extends ModelRelation<K>
    ? D[K] : never;
};

/**
 * Model generic hook callback function.
 */
export type ModelHookCallback = HookCallback<ModelInstance>;

/**
 * Model's hooks definition.
 */
export type ModelHooksDefinition = {
  retrieved: ModelHookCallback;
  creating: ModelHookCallback;
  created: ModelHookCallback;
  updating: ModelHookCallback;
  updated: ModelHookCallback;
  saving: ModelHookCallback;
  saved: ModelHookCallback;
  destroying: ModelHookCallback;
  destroyed: ModelHookCallback;
};

/**
 * Extendable model class holding the configuration and schema.
 */
export type ModelClass<D extends {} = any> = Hookable<ModelHooksDefinition> & {
  /**
   * Internal type identifier for Foscia's type guards.
   */
  readonly $MODEL_TYPE: 'model';
  readonly $type: string;
  readonly $config: ModelConfig;
  readonly $schema: ModelSchema<D>;
  configure(rawConfig?: ModelConfig, override?: boolean): void;
  extends<ND extends {} = {}>(
    rawDefinition?: ND & ThisType<ModelInstance<D & ND>>,
  ): Model<D & ND, ModelInstance<D & ND>>;
};

/**
 * Model class of a dedicated instance.
 * This type is used to keep instance generic typing across actions enhancements.
 */
export type Model<D extends {} = any, I extends ModelInstance<D> = any> =
  & ModelClass<D>
  & Constructor<I>;

/**
 * Model instance for a dedicated model class.
 * This type is used to keep instance generic typing across actions enhancements.
 */
export type ModelClassInstance<D extends {} = any> = {
  readonly $model: ModelClass<D>;
};

/**
 * Model defaults IDs typing when not defined by definition.
 */
export type ModelIdsDefaults<D extends {}> =
  & (D extends { id: any } ? {} : { id: ModelIdType | null })
  & (D extends { lid: any } ? {} : { lid: ModelIdType | null });

/**
 * Model properties map (IDs/attributes/relations/custom props).
 */
export type ModelDefinitionProperties<D extends {}> = ModelIdsDefaults<D> & {
  [K in keyof D]: D[K] extends ModelAttribute<K, infer T, any>
    ? T : D[K] extends ModelRelation<K, infer T, any>
      ? T : D[K] extends ModelId<K, infer T, any>
        ? T : D[K] extends DescriptorHolder<infer T>
          ? T : D[K];
};

/**
 * Model properties key (only writable IDs/attributes/relations).
 */
export type ModelDefinitionWritableKey<D extends {}> = {
  [K in keyof D]: D[K] extends DescriptorHolder<any>
    ? never
    : D[K] extends { readOnly: true } ? never : K;
}[keyof D] | keyof ModelIdsDefaults<D>;

/**
 * Model properties key (only readonly IDs/attributes/relations).
 */
export type ModelDefinitionReadOnlyKey<D extends {}> = {
  [K in keyof D]: D[K] extends DescriptorHolder<any>
    ? never
    : D[K] extends { readOnly: true } ? K : never;
}[keyof D];

/**
 * Model descriptors key (only custom properties).
 */
export type ModelDefinitionDescriptorKey<D extends {}> = {
  [K in keyof D]: D[K] extends DescriptorHolder<any> ? K : never;
}[keyof D];

/**
 * Model properties map (only writable IDs/attributes/relations).
 */
export type ModelDefinitionWritableValues<D extends {}> =
  Pick<ModelDefinitionProperties<D>, ModelDefinitionWritableKey<D>>;

/**
 * Model properties map (only readonly IDs/attributes/relations).
 */
export type ModelDefinitionReadOnlyValues<D extends {}> =
  Readonly<Pick<ModelDefinitionProperties<D>, ModelDefinitionReadOnlyKey<D>>>;

/**
 * Model properties map (IDs/attributes/relations).
 */
export type ModelDefinitionValues<D extends {}> =
  & ModelDefinitionWritableValues<D>
  & ModelDefinitionReadOnlyValues<D>;

/**
 * Model descriptors map (only custom properties).
 */
export type ModelDefinitionDescriptors<D extends {}> =
  Pick<ModelDefinitionProperties<D>, ModelDefinitionDescriptorKey<D>>;

/**
 * Model instance holding state and values.
 */
export type ModelInstance<D extends {} = any> = {
  /**
   * Internal type identifier for Foscia's type guards.
   */
  readonly $MODEL_TYPE: 'instance';
  readonly $model: ModelClass<D>;
  exists: boolean;
  $loaded: Dictionary<true>;
  $values: Partial<ModelValues<D>>;
  $raw: any;
  $original: ModelSnapshot<D>;
} & ModelDefinitionValues<D> & ModelDefinitionDescriptors<D>;

/**
 * Model class or instance snapshot.
 */
export type ModelSnapshot<M> = {
  exists: boolean;
  $raw: any;
  $loaded: Dictionary<true>;
  $values: Partial<ModelValues<M>>;
};

/**
 * Model class or instance.
 */
export type ModelClassOrInstance<D extends {}> = ModelClass<D> | ModelClassInstance<D>;

/**
 * Infer the definition from a model class or model instance.
 */
export type ModelInferDefinition<M> = M extends ModelClassOrInstance<infer D>
  ? D
  : M extends {}
    ? M
    : never;

/**
 * Infer the schema from a model class or model instance.
 */
export type ModelInferSchema<M> = ModelSchema<ModelInferDefinition<M>>;

/**
 * Model class or instance values map (only IDs/attributes/relations).
 */
export type ModelValues<M> = ModelDefinitionValues<ModelInferDefinition<M>>;

/**
 * Model class or instance values map (only writable IDs/attributes/relations).
 */
export type ModelWritableValues<M> = ModelDefinitionWritableValues<ModelInferDefinition<M>>;

/**
 * Model class or instance values map (only readonly IDs/attributes/relations).
 */
export type ModelReadOnlyValues<M> = ModelDefinitionReadOnlyValues<ModelInferDefinition<M>>;

/**
 * Model class or instance IDs/attributes/relations key.
 */
export type ModelKey<M> =
  & string
  & keyof ModelInferSchema<M>
  & keyof ModelValues<M>;

/**
 * Model class or instance relations key (only direct relations).
 *
 * @example
 * const keys: ModelRelationKey<Post>[] = ['comments', 'tags'];
 */
export type ModelRelationKey<M> =
  keyof ModelInferSchema<M> extends infer K
    ? K extends string & keyof ModelInferSchema<M>
      ? ModelInferSchema<M>[K] extends never
        ? never
        : ModelInferSchema<M>[K] extends ModelRelation
          ? K
          : never : never : never;

/**
 * Model class or instance relations key (supports nested relation using dot separator).
 *
 * @example
 * const keys: ModelRelationDotKey<Post>[] = ['comments', 'comments.author', 'tags'];
 */
export type ModelRelationDotKey<M, Depth extends number = 5> =
  [Depth] extends [0]
    ? never
    : keyof ModelInferSchema<M> extends infer K
      ? K extends string & keyof ModelInferSchema<M>
        ? ModelInferSchema<M>[K] extends never
          ? never
          : ModelInferSchema<M>[K] extends ModelRelation<any, infer T>
            ? T extends any[]
              ? K | `${K}.${ModelRelationDotKey<T[number], Prev[Depth]>}`
              : K | `${K}.${ModelRelationDotKey<T, Prev[Depth]>}`
            : never : never : never;
