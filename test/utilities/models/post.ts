import { attr, hasMany, makeModel, readOnly, toDate } from '@/core';
import type Comment from '@test/utilities/models/comment';

export default class Post extends makeModel('posts', {
  title: attr<string>(),
  body: attr<string | null>(),
  commentsCount: attr({ default: 0, sync: 'pull' }),
  comments: hasMany<Comment>(),
  publishedAt: readOnly(attr(toDate({ nullable: true }))),
  get published() {
    return !!this.publishedAt;
  },
}) {
}
