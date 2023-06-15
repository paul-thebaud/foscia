import { logger, makeModel } from '@/core';
import MapRegistry from '@/core/registry/mapRegistry';
import { toKebabCase } from '@/utilities';
import wait from '@test/utilities/wait';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('mapRegistry', () => {
  it('should register and resolve models', async () => {
    const loggerDebugSpy = vi.spyOn(logger, 'debug');

    const modelFoo = makeModel('foo');
    const modelBar = makeModel('bar');
    const modelFooBar = makeModel('foo-bar');

    const registry = new MapRegistry();

    expect(await registry.modelFor('foo')).toBeNull();
    expect(await registry.modelFor('bar')).toBeNull();
    expect(await registry.modelFor('foo-bar')).toBeNull();
    expect(loggerDebugSpy).toHaveBeenCalledTimes(3);

    registry.register(modelFoo, modelBar);

    expect(await registry.modelFor('foo')).toBe(modelFoo);
    expect(await registry.modelFor('bar')).toBe(modelBar);
    expect(await registry.modelFor('foo-bar')).toBeNull();
    expect(loggerDebugSpy).toHaveBeenCalledTimes(4);

    registry.register({ 'foo-bar': async () => modelFooBar });

    expect(await registry.modelFor('foo')).toBe(modelFoo);
    expect(await registry.modelFor('bar')).toBe(modelBar);
    expect(await registry.modelFor('foo-bar')).toBe(modelFooBar);
  });

  it('should normalize type and prepare model', async () => {
    const modelFooBar = makeModel('foo-bar');
    const prepareModel = vi.fn(async (model: typeof modelFooBar) => {
      await wait(10);
      model.configure({ baseURL: 'foo-bar-url' });
    });

    const registry = new MapRegistry({ normalizeType: toKebabCase, prepareModel });
    registry.register({ 'foo-bar': async () => modelFooBar });

    const resolvedModel = await registry.modelFor('foo-bar');
    expect(resolvedModel).toBe(modelFooBar);
    expect(resolvedModel!.$config.baseURL).toBe('foo-bar-url');
    expect(await registry.modelFor('FooBar')).toBe(modelFooBar);
    expect(prepareModel.mock.calls).toStrictEqual([[modelFooBar]]);
  });
});
