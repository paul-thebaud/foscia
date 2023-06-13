import { fill, normalizeDotRelations } from '@/core';
import Comment from '@test/utilities/models/comment';
import Post from '@test/utilities/models/post';
import User from '@test/utilities/models/user';
import { expectTypeOf, test } from 'vitest';

test('Models are type safe', () => {
  const post = new Post();

  expectTypeOf(post.id).toMatchTypeOf<string | number | null>();
  expectTypeOf(post.lid).toMatchTypeOf<string | number | null>();
  expectTypeOf(post.title).toMatchTypeOf<string>();
  expectTypeOf(post.body).toMatchTypeOf<string | null>();
  expectTypeOf(post.publishedAt).toMatchTypeOf<Date>();
  expectTypeOf(post.comments).toMatchTypeOf<Comment[]>();
  expectTypeOf(post.published).toMatchTypeOf<boolean>();

  post.title = 'Hello World';
  // @ts-expect-error publishedAt is readonly
  post.publishedAt = new Date();
  // @ts-expect-error published is readonly
  post.published = false;

  fill(post, { title: 'Hello World' });
  // @ts-expect-error publishedAt is readonly
  fill(post, { publishedAt: new Date() });
  // @ts-expect-error published is not a model's value
  fill(post, { published: false });

  const comment = new Comment();

  expectTypeOf(comment.id).toMatchTypeOf<number | null>();
  expectTypeOf(comment.lid).toMatchTypeOf<string>();
  expectTypeOf(comment.body).toMatchTypeOf<string>();
  expectTypeOf(comment.postedAt).toMatchTypeOf<Date>();
  expectTypeOf(comment.postedBy).toMatchTypeOf<User>();

  fill(comment, { body: 'Hello World', postedAt: new Date() });
  // @ts-expect-error id is a number
  comment.id = 'foo';
  // @ts-expect-error lid is a string
  comment.lid = 42;
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
