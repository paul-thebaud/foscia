// eslint-disable-next-line import/no-extraneous-dependencies
import { makeJsonRest } from '@foscia/blueprints';
import CommentMock from './models/comment.mock';
import PostMock from './models/post.mock';

export default function makeJsonRestActionMock() {
  const { action, registry } = makeJsonRest({
    baseURL: 'https://example.com/api',
  });

  registry.register(PostMock, CommentMock);

  return action;
}
