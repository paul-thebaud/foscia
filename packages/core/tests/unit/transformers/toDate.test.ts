import { logger, toDate } from '@foscia/core';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('unit: toDate', () => {
  it.each([
    [new Date(Date.UTC(2023, 5, 15, 12, 30, 0)), '2023-06-15T12:30:00.000Z'],
  ])('should serialize date to string', (value, expected) => {
    expect(toDate().serialize(value)).toStrictEqual(expected);
    expect(toDate({ nullable: true }).serialize(value)).toStrictEqual(expected);
  });

  it.each([
    ['2023-06-15T12:30:00.000Z', new Date(Date.UTC(2023, 5, 15, 12, 30, 0))],
  ])('should deserialize string to date', (value, expected) => {
    expect(toDate().deserialize(value)).toStrictEqual(expected);
    expect(toDate({ nullable: true }).deserialize(value)).toStrictEqual(expected);
  });

  it('should warn null when nullable is disabled', async () => {
    const loggerWarnMock = vi.spyOn(logger, 'warn').mockImplementation(() => undefined);

    expect((await toDate().deserialize(null)).getTime()).toBeNaN();
    expect((await toDate().deserialize(undefined)).getTime()).toBeNaN();
    expect(() => toDate().serialize(null as any)).toThrowError('Cannot read properties of null');
    expect(() => toDate().serialize(undefined as any)).toThrowError('Cannot read properties of undefined');

    expect(loggerWarnMock.mock.calls).toStrictEqual([
      ['Transforming null or undefined value using `toDate` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transformer `toDate` transform resulted in NaN date value.', [{ value: null }]],
      ['Transforming null or undefined value using `toDate` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transformer `toDate` transform resulted in NaN date value.', [{ value: undefined }]],
      ['Transforming null or undefined value using `toDate` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toDate` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
    ]);
    loggerWarnMock.mockRestore();
  });

  it('should ignore null when nullable is enabled', () => {
    expect(toDate({ nullable: true }).deserialize(null)).toBeNull();
    expect(toDate({ nullable: true }).deserialize(undefined)).toBeNull();
    expect(toDate({ nullable: true }).serialize(null)).toBeNull();
  });

  it('should warn about NaN values', async () => {
    const loggerWarnMock = vi.spyOn(logger, 'warn').mockImplementation(() => undefined);
    expect((await toDate().deserialize('foo-bar')).getTime()).toBeNaN();
    expect(loggerWarnMock.mock.calls).toStrictEqual([
      ['Transformer `toDate` transform resulted in NaN date value.', [{ value: 'foo-bar' }]],
    ]);
    loggerWarnMock.mockRestore();
  });
});
