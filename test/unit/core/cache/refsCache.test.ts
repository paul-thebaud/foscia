import RefsCache from '@/core/cache/refsCache';
import Comment from '@test/utilities/models/comment';
import Post from '@test/utilities/models/post';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('unit: refsCache', () => {
  it('should put, find and remove from cache', async () => {
    const firstPost = new Post();
    const secondPost = new Post();
    const comment = new Comment();

    const cache = new RefsCache();

    expect(await cache.find('posts', '1')).toBeNull();
    expect(await cache.find('posts', '2')).toBeNull();
    expect(await cache.find('posts', '3')).toBeNull();
    expect(await cache.find('dummy', '1')).toBeNull();

    await cache.put('posts', '1', firstPost);
    await cache.put('posts', '2', secondPost);
    await cache.put('comments', '1', comment);

    expect(await cache.find('posts', '1')).toBe(firstPost);
    expect(await cache.find('posts', '2')).toBe(secondPost);
    expect(await cache.find('posts', '3')).toBeNull();
    expect(await cache.find('comments', '1')).toBe(comment);
    expect(await cache.find('dummy', '1')).toBeNull();

    await cache.forget('posts', '1');

    expect(await cache.find('posts', '1')).toBeNull();
    expect(await cache.find('posts', '2')).toBe(secondPost);
    expect(await cache.find('comments', '1')).toBe(comment);

    await cache.put('posts', '1', firstPost);

    expect(await cache.find('posts', '1')).toBe(firstPost);
    expect(await cache.find('posts', '2')).toBe(secondPost);
    expect(await cache.find('comments', '1')).toBe(comment);

    await cache.forgetAll('posts');

    expect(await cache.find('posts', '1')).toBeNull();
    expect(await cache.find('posts', '2')).toBeNull();
    expect(await cache.find('comments', '1')).toBe(comment);

    await cache.put('posts', '1', firstPost);

    expect(await cache.find('posts', '1')).toBe(firstPost);
    expect(await cache.find('posts', '2')).toBeNull();
    expect(await cache.find('comments', '1')).toBe(comment);

    await cache.clear();

    expect(await cache.find('posts', '1')).toBeNull();
    expect(await cache.find('posts', '2')).toBeNull();
    expect(await cache.find('comments', '1')).toBeNull();
  });

  it('should forget if ref has expired', async () => {
    const post = new Post();
    const refMode = {
      ref: vi.fn().mockImplementation(() => post),
      value: vi.fn(),
    };

    const cache = new RefsCache({ mode: refMode });

    expect(await cache.find('posts', '1')).toBeNull();
    expect(refMode.value).not.toHaveBeenCalled();

    refMode.value.mockImplementation(() => post);
    await cache.put('posts', '1', post);

    expect(await cache.find('posts', '1')).toBe(post);
    expect(refMode.value).toHaveBeenCalledOnce();

    refMode.value.mockImplementation(() => undefined);

    expect(await cache.find('posts', '1')).toBeNull();
    expect(refMode.value).toHaveBeenCalledTimes(2);
  });
});
