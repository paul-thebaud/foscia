import { Hookable, HookCallback } from '@/core/hooks/types';
import { Normalizer } from '@/core/normalization/types';
import { Transform } from '@/core/transformers/types';
import { Constructor, DescriptorHolder, Dictionary, Optional, Prev } from '@/utilities';

export type ModelRelationTypeGuesser = (model: ModelClass, def: ModelRelation) => Optional<string>;

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
   * @see {@link reset}
   * @see {@link syncOriginal}
   */
  cloneValue?: Optional<(<T>(value: T) => T)>;
  /**
   * Dedicated base URL. Will overwrite the default base URL.
   */
  baseURL?: Optional<string>;
};

/**
 * Unique identifier for a model instance.
 */
export type ModelId = string | number;

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
export type ModelPropRaw<T = unknown> = {
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
  readOnly?: boolean;
  /**
   * Tells if the property should be synced with the data store.
   */
  sync?: boolean | ModelPropSync;
};

/**
 * Raw definition for a model's attribute.
 */
export type ModelAttributeRaw<
  T = unknown,
> = ModelPropRaw<T> & {
  /**
   * Internal type identifier for Foscia's type guards.
   */
  $MODEL_TYPE: 'attribute';
  transformer?: Transform<T | null> | undefined;
};

/**
 * Definition for a model's attribute.
 */
export type ModelAttribute<K = string, T = any> =
  ModelPropNormalized<K>
  & ModelAttributeRaw<T>;

/**
 * Available model relation types.
 */
export type ModelRelationType = 'hasOne' | 'hasMany';

/**
 * Raw definition for a model's relation.
 */
export type ModelRelationRaw<T = any> = ModelPropRaw<T> & {
  /**
   * Internal type identifier for Foscia's type guards.
   */
  $MODEL_TYPE: 'relation';
  $RELATION_TYPE: ModelRelationType;
  type?: string;
  path?: string;
};

/**
 * Definition for a model's attribute.
 */
export type ModelRelation<K = string, T = any> = ModelPropNormalized<K> & ModelRelationRaw<T>;

/**
 * The parsed model definition with non attributes/relations properties'
 * descriptors wrapped in holders.
 */
export type ModelParsedDefinition<D extends {} = {}> = {
  [K in keyof D]: D[K] extends ModelAttributeRaw
    ? D[K] & ModelPropNormalized<K> : D[K] extends ModelRelationRaw
      ? D[K] & ModelPropNormalized<K> : D[K] extends DescriptorHolder<any>
        ? D[K] : DescriptorHolder<D[K]>;
};

/**
 * Extract model's attributes and relations from the whole definition.
 */
export type ModelSchema<D extends {} = {}> = {
  [K in keyof D]: D[K] extends ModelAttribute<K>
    ? D[K] : D[K] extends ModelRelation<K>
      ? D[K] : never;
};

/**
 * Model hook callback function.
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
 * Model instance holding state and values.
 */
export type ModelInstance<D extends {} = any> = {
  /**
   * Internal type identifier for Foscia's type guards.
   */
  readonly $MODEL_TYPE: 'instance';
  readonly $model: ModelClass<D>;
  // FIXME Should the model id be nullable in its type?
  id: ModelId;
  lid?: ModelId;
  exists: boolean;
  $raw: any;
  $loaded: Dictionary<true>;
  $original: Partial<ModelValues<ModelClass<D>>>;
  $values: Partial<ModelValues<ModelClass<D>>>;
} & {
  [K in keyof D]: D[K] extends ModelAttribute<K, infer T>
    ? T : D[K] extends ModelRelation<K, infer T>
      ? T : D[K] extends DescriptorHolder<infer T>
        ? T : D[K];
};

/**
 * Infer the definition from a model class or model instance.
 */
export type ModelInferDefinition<M> = M extends ModelClass<infer D>
  ? D
  : M extends ModelClassInstance<infer D>
    ? D
    : {};

/**
 * Infer the schema from a model class or model instance.
 */
export type ModelInferSchema<M> = ModelSchema<ModelInferDefinition<M>>;

/**
 * Model class or instance values map (only attributes/relations).
 */
export type ModelValues<M> = {
  [K in keyof ModelInferSchema<M>]:
  ModelInferSchema<M>[K] extends ModelAttribute<infer T>
    ? T : ModelInferSchema<M>[K] extends ModelRelation<infer T>
      ? T : never;
};

/**
 * Model class or instance attributes/relations key.
 */
export type ModelKey<M> = keyof ModelInferSchema<M>;

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
          : ModelInferSchema<M>[K] extends ModelRelation<infer T>
            ? T extends any[]
              ? K | `${K}.${ModelRelationDotKey<T[number], Prev[Depth]>}`
              : K | `${K}.${ModelRelationDotKey<T, Prev[Depth]>}`
            : never : never : never;
