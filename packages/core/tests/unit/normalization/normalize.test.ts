import normalize from '@foscia/core/normalization/normalize';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: normalize', () => {
  it('should use normalizer only when defined', () => {
    const normalizer = (value: string) => `${value}bar`;

    expect(normalize('foo', undefined)).toStrictEqual('foo');
    expect(normalize('foo', null)).toStrictEqual('foo');
    expect(normalize('foo', normalizer)).toStrictEqual('foobar');
  });
});
