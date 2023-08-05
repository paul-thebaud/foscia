import { forId } from '@/core/actions';
import evaluateContext from '@test/utilities/evaluateContext';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: forId', () => {
  it('should use id', async () => {
    expect(await evaluateContext(forId('foo'))).toStrictEqual({ id: 'foo' });
  });
});
