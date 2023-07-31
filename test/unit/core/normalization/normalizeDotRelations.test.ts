import { hasOne, logger, makeModel, normalizeDotRelations } from '@/core';
import MapRegistry from '@/core/registry/mapRegistry';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('unit: normalizeDotRelations', () => {
  it('should normalize only roots without registry', async () => {
    const loggerDebugSpy = vi.spyOn(logger, 'debug');

    const model = makeModel('model', {
      foo: hasOne<typeof subModel>({ alias: 'bar', type: 'sub-model' }),
    });
    const subModel = makeModel('sub-model', {
      baz: hasOne({ alias: 'foobar' }),
    });

    expect(await normalizeDotRelations(model, ['foo', 'foo.baz']))
      .toStrictEqual(['bar', 'bar.baz']);
    expect(loggerDebugSpy).toHaveBeenCalledOnce();
  });

  it('should normalize all with registry', async () => {
    const loggerDebugSpy = vi.spyOn(logger, 'debug');

    const model = makeModel('model', {
      foo: hasOne<typeof subModel>({ alias: 'bar', type: 'sub-model' }),
    });
    const subModel = makeModel('sub-model', {
      baz: hasOne({ alias: 'foobar' }),
    });

    const registry = new MapRegistry();
    registry.register(model, subModel);

    expect(await normalizeDotRelations(model, ['foo', 'foo.baz'], registry))
      .toStrictEqual(['bar', 'bar.foobar']);
    expect(loggerDebugSpy).not.toHaveBeenCalled();
  });

  it('should warn about non-relations keys', async () => {
    const loggerWarnSpy = vi.spyOn(logger, 'warn');

    const model = makeModel('model', {});

    expect(await normalizeDotRelations(model, ['foo'] as any)).toStrictEqual(['foo']);
    expect(loggerWarnSpy).toHaveBeenCalledOnce();
  });
});
