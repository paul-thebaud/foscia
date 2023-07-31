import { attr, hasMany, makeModel, readOnly, toDate } from '@/core';
import type Comment from '@test/utilities/models/comment';

export default class Post extends makeModel('posts', {
  title: attr<string>(),
  body: attr<string | null>(),
  commentsCount: attr({ default: 0, sync: 'retrieve' }),
  comments: hasMany<Comment>(),
  publishedAt: readOnly(attr<Date | null>(toDate())),
  get published() {
    return !!this.publishedAt;
  },
}) {
}
