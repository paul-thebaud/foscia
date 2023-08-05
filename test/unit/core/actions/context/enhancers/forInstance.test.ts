import { fill, forInstance } from '@/core';
import evaluateContext from '@test/utilities/evaluateContext';
import Post from '@test/utilities/models/post';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: forInstance', () => {
  it('should use instance without id', async () => {
    const post = new Post();

    expect(await evaluateContext(forInstance(post))).toStrictEqual({
      model: Post,
      modelPath: 'posts',
      baseURL: undefined,
      instance: post,
      id: undefined,
    });
  });

  it('should use instance with id', async () => {
    const post = fill(new Post(), { id: 1 });

    expect(await evaluateContext(forInstance(post))).toStrictEqual({
      model: Post,
      modelPath: 'posts',
      baseURL: undefined,
      instance: post,
      id: 1,
    });
  });
});
