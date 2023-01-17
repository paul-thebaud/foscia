import FuncClientError from '@/core/errors/funcClientError';
import logger from '@/core/logger/logger';
import isPropDef from '@/core/model/guards/isPropDef';
import { Model, ModelConfig, ModelInstance, ModelSchema } from '@/core/model/types';
import { Dictionary, eachDescriptors, isNil, value } from '@/utilities';

export default function makeModelClass(config: ModelConfig): Model {
  function ModelClass(this: ModelInstance) {
    Object.defineProperty(this, '$MODEL_TYPE', { value: 'instance' });
    Object.defineProperty(this, '$model', { value: ModelClass });
    Object.defineProperty(this, 'exists', { writable: true, value: false });
    Object.defineProperty(this, '$loaded', { writable: true, value: {} });
    Object.defineProperty(this, '$original', { writable: true, value: {} });
    Object.defineProperty(this, '$values', { writable: true, value: {} });

    Object.defineProperty(this, 'id', {
      writable: true,
      enumerable: true,
      value: undefined,
    });

    Object.entries(ModelClass.$schema as ModelSchema<any>).forEach(([key, def]) => {
      Object.defineProperty(this, key, {
        enumerable: true,
        get: () => this.$values[key],
        set: (newValue) => {
          this.$values[key] = newValue;
        },
      });

      if (def.default !== undefined) {
        this.$values[key] = value(def.default);

        if (def.default && typeof def.default === 'object') {
          logger.warn('Default object values must be defined using a factory function.');
        }
      }
    });
  }

  ModelClass.$MODEL_TYPE = 'model';
  ModelClass.$config = config;
  ModelClass.$schema = {} as Dictionary;
  ModelClass.$hooks = {};
  ModelClass.extends = (definition?: object) => {
    eachDescriptors(definition ?? {}, (key, descriptor) => {
      if (['id', 'lid', 'type', 'exists'].indexOf(key) !== -1) {
        throw new FuncClientError(
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

  return ModelClass as unknown as Model;
}
