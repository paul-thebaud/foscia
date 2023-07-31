import { toDate } from '@/core';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: toDate', () => {
  it.each([
    [null, null],
    [undefined, null],
    [new Date(Date.UTC(2023, 5, 15, 12, 30, 0)), '2023-06-15T12:30:00.000Z'],
  ])('should serialize date to string', (value, expected) => {
    expect(toDate().serialize(value!)).toStrictEqual(expected);
  });

  it.each([
    [null, null],
    [undefined, null],
    ['2023-06-15T12:30:00.000Z', new Date(Date.UTC(2023, 5, 15, 12, 30, 0))],
  ])('should deserialize string to date', (value, expected) => {
    expect(toDate().deserialize(value)).toStrictEqual(expected);
  });
});
