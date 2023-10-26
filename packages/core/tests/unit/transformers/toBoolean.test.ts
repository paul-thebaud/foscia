import { logger, toBoolean } from '@foscia/core';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('unit: toBoolean', () => {
  it.each([
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
  ])('should convert to boolean with default values', (value, expected) => {
    const defaultToBoolean = toBoolean();
    expect(defaultToBoolean.deserialize).toStrictEqual(defaultToBoolean.serialize);
    expect(defaultToBoolean.deserialize(value)).toStrictEqual(expected);
  });

  it.each([
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
  ])('should convert to boolean with custom values', (value, expected) => {
    const customToBoolean = toBoolean({ trueValues: [true, 1] });
    expect(customToBoolean.deserialize).toStrictEqual(customToBoolean.serialize);
    expect(customToBoolean.deserialize(value)).toStrictEqual(expected);
  });

  it('should warn null when nullable is disabled', async () => {
    const loggerWarnMock = vi.spyOn(logger, 'warn').mockImplementation(() => undefined);

    expect(toBoolean().deserialize(null)).toStrictEqual(false);
    expect(toBoolean().deserialize(undefined)).toStrictEqual(false);
    expect(toBoolean().serialize(null as any)).toStrictEqual(false);
    expect(toBoolean().serialize(undefined as any)).toStrictEqual(false);

    expect(loggerWarnMock.mock.calls).toStrictEqual([
      ['Transforming null or undefined value using `toBoolean` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toBoolean` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toBoolean` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toBoolean` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
    ]);
    loggerWarnMock.mockRestore();
  });

  it('should ignore null when nullable is enabled', () => {
    expect(toBoolean({ nullable: true }).deserialize(null)).toBeNull();
    expect(toBoolean({ nullable: true }).deserialize(undefined)).toBeNull();
    expect(toBoolean({ nullable: true }).serialize(null)).toBeNull();
  });
});
