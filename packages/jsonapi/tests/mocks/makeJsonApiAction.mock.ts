// eslint-disable-next-line import/no-extraneous-dependencies
import { makeJsonApi } from '@foscia/blueprints';
import CommentMock from './models/comment.mock';
import PostMock from './models/post.mock';

export default function makeJsonApiActionMock() {
  const { action, registry } = makeJsonApi({
    baseURL: 'https://example.com/api/v1',
  });

  registry.register(PostMock, CommentMock);

  return action;
}
