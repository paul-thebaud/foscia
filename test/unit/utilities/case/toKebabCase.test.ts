import { toKebabCase } from '@/utilities';
import { describe, expect, it } from 'vitest';

describe.concurrent('toKebabCase', () => {
  it.each([
    ['foo', 'foo'],
    ['foo-bar', 'foo-bar'],
    ['foo_bar', 'foo-bar'],
    ['foo bar', 'foo-bar'],
    ['Foo Bar', 'foo-bar'],
    ['FOO BAR', 'foo-bar'],
  ])('toKebabCase(%s): %s', (value, kebab) => {
    expect(toKebabCase(value)).toStrictEqual(kebab);
  });
});
