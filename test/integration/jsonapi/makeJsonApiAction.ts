import { makeJsonApi } from '@/blueprints';
import Comment from '@test/utilities/models/comment';
import Post from '@test/utilities/models/post';

export default function makeJsonApiAction() {
  const { action, registry } = makeJsonApi({
    baseURL: 'https://example.com/api/v1',
  });

  registry.register(Post, Comment);

  return action;
}
