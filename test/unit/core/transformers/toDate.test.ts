import { toDate } from '@/core';
import { describe, expect, it } from 'vitest';

describe.concurrent('toDate', () => {
  it.each([
    [null, null],
    [undefined, null],
    [new Date(Date.UTC(2023, 5, 15, 12, 30, 0)), '2023-06-15T12:30:00.000Z'],
  ])('toDate.serialize(%s): %s', (value, expected) => {
    expect(toDate().serialize(value!)).toStrictEqual(expected);
  });

  it.each([
    [null, null],
    [undefined, null],
    ['2023-06-15T12:30:00.000Z', new Date(Date.UTC(2023, 5, 15, 12, 30, 0))],
  ])('toDate.deserialize(%s): %s', (value, expected) => {
    expect(toDate().deserialize(value)).toStrictEqual(expected);
  });
});
