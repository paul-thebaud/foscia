import { attr, hasMany, makeModel, readOnly, toDate } from '@foscia/core';
import type CommentMock from './comment.mock';

export default class PostMock extends makeModel('posts', {
  title: attr<string>(),
  body: attr<string | null>(),
  comments: hasMany<CommentMock>(),
  publishedAt: readOnly(attr(toDate({ nullable: true }))),
}) {
}
