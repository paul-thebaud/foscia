import { fill, normalizeDotRelations } from '@/core';
import Comment from '@test/utilities/models/comment';
import Post from '@test/utilities/models/post';
import User from '@test/utilities/models/user';
import { expectTypeOf, test } from 'vitest';

test('Models are type safe', () => {
  const post = new Post();

  expectTypeOf(post.title).toMatchTypeOf<string>();
  expectTypeOf(post.body).toMatchTypeOf<string | null>();
  expectTypeOf(post.comments).toMatchTypeOf<Comment[]>();

  const comment = new Comment();

  expectTypeOf(comment.body).toMatchTypeOf<string>();
  expectTypeOf(comment.postedAt).toMatchTypeOf<Date>();
  expectTypeOf(comment.postedBy).toMatchTypeOf<User>();

  fill(comment, { body: 'Hello World', postedAt: new Date() });
  // @ts-expect-error body is a string
  fill(comment, { body: new Date() });
  // @ts-expect-error postedAt is a date
  fill(comment, { postedAt: 'Hello World' });

  normalizeDotRelations(Post, ['comments']);
  normalizeDotRelations(Post, ['comments.postedBy']);
  // @ts-expect-error unknown is not a Post relation
  normalizeDotRelations(Post, ['unknown']);
  // @ts-expect-error unknown is not a Comment relation
  normalizeDotRelations(Post, ['comments.unknown']);
});
