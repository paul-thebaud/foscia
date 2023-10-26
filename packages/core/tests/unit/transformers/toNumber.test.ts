import { logger, toNumber } from '@foscia/core';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('unit: toNumber', () => {
  it.each([
    [1, 1],
    ['1', 1],
    [1.5, 1.5],
    ['1.5', 1.5],
    [42.42, 42.42],
    ['42.42', 42.42],
  ])('should convert to number', (value, expected) => {
    const defaultToNumber = toNumber();
    expect(defaultToNumber.deserialize).toStrictEqual(defaultToNumber.serialize);
    expect(defaultToNumber.deserialize(value)).toStrictEqual(expected);
  });

  it('should warn null when nullable is disabled', async () => {
    const loggerWarnMock = vi.spyOn(logger, 'warn').mockImplementation(() => undefined);

    expect(toNumber().deserialize(null)).toStrictEqual(0);
    expect(toNumber().deserialize(undefined)).toBeNaN();
    expect(toNumber().serialize(null as any)).toStrictEqual(0);
    expect(toNumber().serialize(undefined as any)).toBeNaN();

    expect(loggerWarnMock.mock.calls).toStrictEqual([
      ['Transforming null or undefined value using `toNumber` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toNumber` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transformer `toNumber` transform resulted in NaN value.', [{ value: undefined }]],
      ['Transforming null or undefined value using `toNumber` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toNumber` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transformer `toNumber` transform resulted in NaN value.', [{ value: undefined }]],
    ]);
    loggerWarnMock.mockRestore();
  });

  it('should ignore null when nullable is enabled', () => {
    expect(toNumber({ nullable: true }).deserialize(null)).toBeNull();
    expect(toNumber({ nullable: true }).deserialize(undefined)).toBeNull();
    expect(toNumber({ nullable: true }).serialize(null)).toBeNull();
  });

  it('should warn about NaN values', () => {
    const loggerWarnMock = vi.spyOn(logger, 'warn').mockImplementation(() => undefined);
    expect(toNumber().deserialize('foo-bar')).toBeNaN();
    expect(loggerWarnMock.mock.calls).toStrictEqual([
      ['Transformer `toNumber` transform resulted in NaN value.', [{ value: 'foo-bar' }]],
    ]);
    loggerWarnMock.mockRestore();
  });
});
