import FosciaError from '@/core/errors/fosciaError';
import logger from '@/core/logger/logger';
import makeDefinition from '@/core/model/makeDefinition';
import isIdDef from '@/core/model/props/checks/isIdDef';
import isPropDef from '@/core/model/props/checks/isPropDef';
import id from '@/core/model/props/factories/id';
import takeSnapshot from '@/core/model/snapshots/takeSnapshot';
import {
  Model,
  ModelAttribute,
  ModelConfig,
  ModelInstance,
  ModelRelation,
} from '@/core/model/types';
import { applyConfig, eachDescriptors, isNil, value } from '@/utilities';

export default function makeModelClass(type: string, config: ModelConfig) {
  const computeDefault = (instance: ModelInstance, def: ModelAttribute | ModelRelation) => {
    if (def.default && typeof def.default === 'object') {
      logger.warn(
        `Default \`${instance.$model.$type}.${def.key}\` object attribute's values must be defined using a factory function.`,
      );
    }

    return value(def.default);
  };

  const ModelClass = function ModelConstructor(this: ModelInstance) {
    Object.defineProperty(this, '$MODEL_TYPE', { value: 'instance' });
    Object.defineProperty(this, '$model', { value: ModelClass });
    Object.defineProperty(this, 'exists', { writable: true, value: false });
    Object.defineProperty(this, '$raw', { writable: true, value: null });
    Object.defineProperty(this, '$loaded', { writable: true, value: {} });
    Object.defineProperty(this, '$values', { writable: true, value: {} });

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
        this.$values[def.key] = computeDefault(this, def.default);
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
      if (['type', 'exists'].indexOf(key) !== -1) {
        throw new FosciaError(
          `\`type\` and \`exists\` are forbidden as a definition keys (found \`${key}\`).`,
        );
      }

      if (!isNil(descriptor.value) && isPropDef(descriptor.value)) {
        if (!isIdDef(descriptor.value) && ['id', 'lid'].indexOf(key) !== -1) {
          throw new FosciaError(
            `\`id\`, \`lid\` are forbidden as attribute, relation or properties (found \`${key}\`). Use \`id()\` factory instead.`,
          );
        }

        ModelClass.$schema[key] = descriptor.value;
      } else {
        Object.defineProperty(ModelClass.prototype, key, descriptor);
      }
    });

    return ModelClass;
  };

  ModelClass.extends(makeDefinition({
    id: id(),
    lid: id(),
  }));

  return ModelClass;
}
