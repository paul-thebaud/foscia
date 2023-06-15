import { toDate, toString } from '@/core';
import useTransform from '@/core/transformers/useTransform';
import { describe, expect, it } from 'vitest';

describe.concurrent('useTransform', () => {
  it('should use adapted transform function', () => {
    const string = toString();
    const date = toDate();

    expect(useTransform(undefined, 'serialize')('test')).toStrictEqual('test');
    expect(useTransform(undefined, 'deserialize')('test')).toStrictEqual('test');

    expect(useTransform(string, 'serialize')).toBe(string);
    expect(useTransform(string, 'deserialize')).toBe(string);

    expect(useTransform(date, 'serialize')).toBe(date.serialize);
    expect(useTransform(date, 'deserialize')).toBe(date.deserialize);
  });
});
