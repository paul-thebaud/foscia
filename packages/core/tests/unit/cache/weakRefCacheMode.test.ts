import { weakRefCacheMode } from '@foscia/core';
import { describe, expect, it } from 'vitest';
import PostMock from '../../mocks/models/post.mock';

describe.concurrent('unit: weakRefCacheMode', () => {
  it('should use a weak ref instance', async () => {
    const post = new PostMock();

    const ref = await weakRefCacheMode.ref(post);

    expect(ref).toBeInstanceOf(WeakRef);
    expect(weakRefCacheMode.value(ref)).toBe(post);
  });
});
