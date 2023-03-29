import { pluralize } from '@/utilities';
import { describe, expect, it } from 'vitest';

describe.concurrent('pluralize', () => {
  it.each([
    ['car', 'cars'],
    ['apple', 'apples'],
    ['bus', 'buses'],
    ['dish', 'dishes'],
    ['leaf', 'leaves'],
    ['knife', 'knives'],
    ['day', 'days'],
    ['donkey', 'donkeys'],
    ['city', 'cities'],
    ['country', 'countries'],
    ['zoo', 'zoos'],
    ['video', 'videos'],
    ['hero', 'heroes'],
    ['potato', 'potatoes'],
  ])('pluralize(%s): %s', (value, kebab) => {
    expect(pluralize(value)).toStrictEqual(kebab);
  });
});
