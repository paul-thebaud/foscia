import { hasMany } from '@/core';
import makeModel from '@/core/model/makeModel';
import attr from '@/core/model/props/attr';
import type Comment from '@/playground/models/comment';

export default class Post extends makeModel('posts', {
  title: attr<string>(),
  body: attr<string>(),
  comments: hasMany<Comment>({ type: 'comments' }),
}) {
}
