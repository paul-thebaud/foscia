import { attr, hasMany, makeModel } from '@/core';
import type Comment from '@test/utilities/models/comment';

export default class Post extends makeModel('posts', {
  title: attr<string>(),
  body: attr<string | null>(),
  comments: hasMany<Comment>(),
}) {
}
