import { attr, hasMany, makeModel } from '@/core';
import type Comment from '@/playground/models/comment';

export default class Post extends makeModel('posts', {
  title: attr<string>(),
  body: attr<string>(),
  comments: hasMany<Comment>(),
}) {
}
