import { attr, hasOne, id, makeModel, toDate, toNumber, toString } from '@/core';
import type User from '@test/utilities/models/user';

export default class Comment extends makeModel('comments', {
  id: id(toNumber({ nullable: true })),
  lid: id(toString()),
  body: attr(toString()),
  postedAt: attr(toDate()),
  postedBy: hasOne<User>(),
}) {
}
