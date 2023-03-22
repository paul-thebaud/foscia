import { attr, hasOne, makeModel, toDate, toString } from '@/core';
import type User from '@test/utilities/models/user';

export default class Comment extends makeModel('comments', {
  body: attr(toString()),
  postedAt: attr(toDate()),
  postedBy: hasOne<User>(),
}) {
}
