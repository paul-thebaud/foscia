import FosciaError from '@/core/errors/fosciaError';
import logger from '@/core/logger/logger';
import isPropDef from '@/core/model/props/checks/isPropDef';
import takeSnapshot from '@/core/model/snapshots/takeSnapshot';
import { Model, ModelConfig, ModelInstance } from '@/core/model/types';
import { applyConfig, eachDescriptors, isNil, value } from '@/utilities';

export default function makeModelClass(type: string, config: ModelConfig) {
  const ModelClass = function ModelConstructor(this: ModelInstance) {
    Object.defineProperty(this, '$MODEL_TYPE', { value: 'instance' });
    Object.defineProperty(this, '$model', { value: ModelClass });
    Object.defineProperty(this, 'exists', { writable: true, value: false });
    Object.defineProperty(this, '$raw', { writable: true, value: null });
    Object.defineProperty(this, '$loaded', { writable: true, value: {} });
    Object.defineProperty(this, '$values', { writable: true, value: {} });
    Object.defineProperty(this, 'id', {
      writable: true,
      enumerable: true,
      value: undefined,
    });
    Object.defineProperty(this, 'lid', {
      writable: true,
      enumerable: true,
      value: undefined,
    });

    Object.defineProperty(this, '$original', { writable: true, value: takeSnapshot(this) });

    Object.values(ModelClass.$schema).forEach((def) => {
      Object.defineProperty(this, def.key, {
        enumerable: true,
        get: () => this.$values[def.key],
        set: (nextValue) => {
          if (def.readOnly) {
            throw new FosciaError(
              `\`${this.$model.$type}.${def.key}\` cannot be set because it is read-only.`,
            );
          }

          this.$values[def.key] = nextValue;
        },
      });

      if (def.default !== undefined) {
        this.$values[def.key] = value(def.default);

        if (def.default && typeof def.default === 'object') {
          logger.warn(
            `Default \`${this.$model.$type}.${def.key}\` object attribute's values must be defined using a factory function.`,
          );
        }
      }
    });
  } as unknown as Model;

  Object.defineProperty(ModelClass, '$MODEL_TYPE', { value: 'model' });
  Object.defineProperty(ModelClass, '$type', { value: type });
  Object.defineProperty(ModelClass, '$config', { value: config });
  Object.defineProperty(ModelClass, '$schema', { value: {} });
  Object.defineProperty(ModelClass, '$hooks', { writable: true, value: {} });

  ModelClass.configure = (rawConfig?: ModelConfig, override = true) => {
    applyConfig(ModelClass.$config, rawConfig, override);
  };

  ModelClass.extends = (rawDefinition?: object) => {
    eachDescriptors(rawDefinition ?? {}, (key, descriptor) => {
      if (['id', 'lid', 'type', 'exists'].indexOf(key) !== -1) {
        throw new FosciaError(
          `\`id\`, \`lid\`, \`type\` and \`exists\` are forbidden as a definition keys (found \`${key}\`).`,
        );
      }

      if (!isNil(descriptor.value) && isPropDef(descriptor.value)) {
        ModelClass.$schema[key] = descriptor.value;
      } else {
        Object.defineProperty(ModelClass.prototype, key, descriptor);
      }
    });

    return ModelClass;
  };

  return ModelClass;
}
