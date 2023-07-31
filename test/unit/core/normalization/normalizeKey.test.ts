import { attr, hasOne, makeModel, normalizeKey } from '@/core';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: normalizeKey', () => {
  it('should normalize aliased key', () => {
    const model = makeModel('model', {
      foo: attr({ alias: 'bar' }),
    });

    expect(normalizeKey(model, 'foo')).toStrictEqual('bar');
  });

  it('should not normalize when no normalizer', () => {
    const model = makeModel('model', {
      foo: attr(),
    });

    expect(normalizeKey(model, 'foo')).toStrictEqual('foo');
  });

  it('should normalize with dedicated normalizers', () => {
    const attrNormalizer = (v: string) => `${v}foo`;
    const relNormalizer = (v: string) => `${v}bar`;

    const model = makeModel({
      type: 'model',
      normalizeAttributeKey: attrNormalizer,
      normalizeRelationKey: relNormalizer,
    }, {
      foo: attr(),
      bar: hasOne(),
    });

    expect(normalizeKey(model, 'foo')).toStrictEqual('foofoo');
    expect(normalizeKey(model, 'bar')).toStrictEqual('barbar');
  });

  it('should not normalize with default normalizer', () => {
    const normalizer = (v: string) => `${v}foo`;

    const model = makeModel({
      type: 'model',
      normalizeKey: normalizer,
    }, {
      foo: attr(),
      bar: hasOne(),
    });

    expect(normalizeKey(model, 'foo')).toStrictEqual('foofoo');
    expect(normalizeKey(model, 'bar')).toStrictEqual('barfoo');
  });
});
