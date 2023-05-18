import { attr, hasOne, makeModel, toDate, toNumber, toString } from '@/core';
import id from '@/core/model/props/factories/id';
import lid from '@/core/model/props/factories/lid';
import type User from '@test/utilities/models/user';

export default class Comment extends makeModel('comments', {
  id: id<number | null>(toNumber()),
  lid: lid(toString()),
  body: attr(toString()),
  postedAt: attr(toDate()),
  postedBy: hasOne<User>(),
}) {
}
