import { toString } from '@/core';
import { describe, expect, it } from 'vitest';

describe.concurrent('toString', () => {
  it.each([
    [null, null],
    [undefined, null],
    ['', null],
    ['hello', 'hello'],
    [42, '42'],
    [42.42, '42.42'],
    [false, 'false'],
  ])('toString(%s): %s', (value, expected) => {
    expect(toString()(value)).toStrictEqual(expected);
  });
});
