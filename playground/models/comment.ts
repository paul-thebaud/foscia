import makeModel from '@/core/model/makeModel';
import attr from '@/core/model/props/attr';

export default class Comment extends makeModel('comments', {
  name: attr<string>(),
  email: attr<string>(),
  body: attr<string>(),
}) {
}
