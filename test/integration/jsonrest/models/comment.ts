import { attr, makeModel } from '@/core';

export default class Comment extends makeModel('comments', {
  body: attr<string>(),
}) {
}
