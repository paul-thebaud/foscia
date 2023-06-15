import { weakRefCacheMode } from '@/core';
import Post from '@test/utilities/models/post';
import { describe, expect, it } from 'vitest';

describe.concurrent('weakRefCacheMode', () => {
  it('should use a weak ref instance', async () => {
    const post = new Post();

    const ref = await weakRefCacheMode.ref(post);

    expect(ref).toBeInstanceOf(WeakRef);
    expect(weakRefCacheMode.value(ref)).toBe(post);
  });
});
