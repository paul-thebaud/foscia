import { attr, makeModel } from '@/core';

export default class User extends makeModel('users', {
  name: attr<string>(),
  email: attr<string>(),
}) {
}
