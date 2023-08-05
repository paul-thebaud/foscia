import { target } from '@/core/actions';
import evaluateContext from '@test/utilities/evaluateContext';
import Post from '@test/utilities/models/post';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: target', () => {
  it('should use model as target', async () => {
    expect(await evaluateContext(target(Post))).toStrictEqual({ model: Post });
  });
});
