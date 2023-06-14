import { attr, hasOne, id, makeModel, toDate, toNumber, toString } from '@/core';
import type User from '@test/utilities/models/user';

export default class Comment extends makeModel('comments', {
  id: id<number | null>(toNumber()),
  lid: id(toString()),
  body: attr(toString()),
  postedAt: attr(toDate()),
  postedBy: hasOne<User>(),
}) {
}
