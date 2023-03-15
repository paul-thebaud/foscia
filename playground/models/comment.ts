import { attr, makeModel } from '@/core';

export default class Comment extends makeModel('comments', {
  name: attr<string>(),
  email: attr<string>(),
  body: attr<string>(),
}) {
}
