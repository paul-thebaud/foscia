import { toBoolean } from '@/core';
import { describe, expect, it } from 'vitest';

describe.concurrent('toBoolean', () => {
  it.each([
    [null, null],
    [undefined, null],
    ['', null],
    [true, true],
    [1, true],
    ['1', true],
    ['true', true],
    ['yes', true],
    [false, false],
    [0, false],
    ['0', false],
    ['false', false],
    ['no', false],
  ])('toBoolean(%s): %s', (value, expected) => {
    const defaultToBoolean = toBoolean();
    expect(defaultToBoolean(value)).toStrictEqual(expected);
  });

  it.each([
    [null, null],
    [undefined, null],
    ['', null],
    [true, true],
    [1, true],
    ['1', false],
    ['true', false],
    ['yes', false],
    [false, false],
    [0, false],
    ['0', false],
    ['false', false],
    ['no', false],
  ])('toBoolean(%s): %s (custom values)', (value, expected) => {
    const defaultToBoolean = toBoolean([true, 1]);
    expect(defaultToBoolean(value)).toStrictEqual(expected);
  });
});
