import { logger, toArrayOf, toString } from '@foscia/core';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('unit: toArrayOf', () => {
  it.each([
    [['foo', 'bar'], ['foo', 'bar']],
    [[42, 42.42], ['42', '42.42']],
  ])('should convert items to string', async (value, expected) => {
    const toArrayOfString = toArrayOf(toString());
    expect((await toArrayOfString.deserialize(value))).toStrictEqual(expected);
    expect((await toArrayOfString.serialize(expected))).toStrictEqual(expected);
  });

  it('should warn null when nullable is disabled', async () => {
    const loggerWarnMock = vi.spyOn(logger, 'warn').mockImplementation(() => undefined);

    expect(() => toArrayOf(toString()).deserialize(null as any)).toThrowError('Cannot read properties of null');
    expect(() => toArrayOf(toString()).deserialize(undefined as any)).toThrowError('Cannot read properties of undefined');
    expect(() => toArrayOf(toString()).serialize(null as any)).toThrowError('Cannot read properties of null');
    expect(() => toArrayOf(toString()).serialize(undefined as any)).toThrowError('Cannot read properties of undefined');

    expect(loggerWarnMock.mock.calls).toStrictEqual([
      ['Transforming null or undefined value using `toArrayOf` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toArrayOf` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toArrayOf` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toArrayOf` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
    ]);
    loggerWarnMock.mockRestore();
  });

  it('should ignore null when nullable is enabled', () => {
    expect(toArrayOf(toString(), { nullable: true }).deserialize(null)).toBeNull();
    expect(toArrayOf(toString(), { nullable: true }).deserialize(undefined)).toBeNull();
    expect(toArrayOf(toString(), { nullable: true }).serialize(null)).toBeNull();
  });
});
