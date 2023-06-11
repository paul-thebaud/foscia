import { attr, hasMany, makeModel, toDate } from '@/core';
import readOnly from '@/core/model/props/factories/readOnly';
import type Comment from '@test/utilities/models/comment';

export default class Post extends makeModel('posts', {
  title: attr<string>(),
  body: attr<string | null>(),
  comments: hasMany<Comment>(),
  publishedAt: readOnly(attr<Date | null>(toDate())),
  get published() {
    return !!this.publishedAt;
  },
}) {
}
