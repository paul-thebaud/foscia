import { attr, hasOne, makeModel, toDate, toNumber, toString } from '@/core';
import id from '@/core/model/props/factories/id';
import type User from '@test/utilities/models/user';

export default class Comment extends makeModel('comments', {
  id: id<number | null>(toNumber()),
  lid: id(toString()),
  body: attr(toString()),
  postedAt: attr(toDate()),
  postedBy: hasOne<User>(),
}) {
}
