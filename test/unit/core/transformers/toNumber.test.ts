import { toNumber } from '@/core';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: toNumber', () => {
  it.each([
    [null, null],
    [undefined, null],
    ['', null],
    [1, 1],
    ['1', 1],
    [1.5, 1.5],
    ['1.5', 1.5],
    [42.42, 42.42],
    ['42.42', 42.42],
  ])('should convert to number', (value, expected) => {
    expect(toNumber()(value)).toStrictEqual(expected);
  });
});
