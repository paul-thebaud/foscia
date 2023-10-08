import { logger, toString } from '@/core';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('unit: toString', () => {
  it.each([
    ['hello', 'hello'],
    [42, '42'],
    [42.42, '42.42'],
    [false, 'false'],
  ])('should convert to string', (value, expected) => {
    const defaultToString = toString();
    expect(defaultToString.deserialize).toStrictEqual(defaultToString.serialize);
    expect(defaultToString.deserialize(value)).toStrictEqual(expected);
  });

  it('should warn null when nullable is disabled', async () => {
    const loggerWarnMock = vi.spyOn(logger, 'warn').mockImplementation(() => undefined);

    expect(toString().deserialize(null)).toStrictEqual('null');
    expect(toString().deserialize(undefined)).toStrictEqual('undefined');
    expect(toString().serialize(null as any)).toStrictEqual('null');
    expect(toString().serialize(undefined as any)).toStrictEqual('undefined');

    expect(loggerWarnMock.mock.calls).toStrictEqual([
      ['Transforming null or undefined value using `toString` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toString` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toString` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
      ['Transforming null or undefined value using `toString` is not enabled. Pass `{ nullable: true }` options to your transformer to enable it.'],
    ]);
    loggerWarnMock.mockRestore();
  });

  it('should ignore null when nullable is enabled', () => {
    expect(toString({ nullable: true }).deserialize(null)).toBeNull();
    expect(toString({ nullable: true }).deserialize(undefined)).toBeNull();
    expect(toString({ nullable: true }).serialize(null)).toBeNull();
  });
});
