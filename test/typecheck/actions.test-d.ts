import { all, cachedOr, forInstance, forModel, include, one, oneOrCurrent, when } from '@/core';
import action from '@test/utilities/action';
import Post from '@test/utilities/models/post';
import { expectTypeOf, test } from 'vitest';

test('Actions are type safe', async () => {
  const postsUsingFunc = await action()
    .use(forModel(Post))
    .use(include('comments.postedBy'))
    .run(all());
  const postsUsingBuild = await action()
    .forModel(Post)
    .include('comments.postedBy')
    .all();
  const postsUsingVariadic = await action()
    .use(forModel(Post), include('comments.postedBy'))
    .run(all());

  expectTypeOf(postsUsingFunc).toMatchTypeOf<Post[]>();
  expectTypeOf(postsUsingBuild).toMatchTypeOf<Post[]>();
  expectTypeOf(postsUsingVariadic).toMatchTypeOf<Post[]>();

  const postUsingFunc = await action()
    .use(forInstance(postsUsingBuild[0]))
    .run(cachedOr(oneOrCurrent()));
  const postUsingBuild = await action()
    .forInstance(postsUsingBuild[0])
    .cachedOr(oneOrCurrent());

  expectTypeOf(postUsingFunc).toMatchTypeOf<Post>();
  expectTypeOf(postUsingBuild).toMatchTypeOf<Post>();

  const createdPostUsingFunc = await action()
    .use(forInstance(postsUsingBuild[0]))
    .use(include('comments.postedBy'))
    .run(when(postUsingBuild.exists, one()));
  const createdPostUsingBuild = await action()
    .forInstance(postsUsingBuild[0])
    .include('comments.postedBy')
    .when(postUsingBuild.exists, one());

  expectTypeOf(createdPostUsingFunc).toMatchTypeOf<Post | null | void>();
  expectTypeOf(createdPostUsingBuild).toMatchTypeOf<Post | null | void>();

  // @ts-expect-error title is not a post relation
  await action().forModel(Post).include('title');
  // @ts-expect-error unknown is not a post relation
  await action().forModel(Post).include('unknown');
  // @ts-expect-error unknown is not a comment relation
  await action().forModel(Post).include('comments.unknown');
});
