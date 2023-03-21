import { makeJsonRest } from '@/blueprints';
import Comment from '@test/integration/jsonrest/models/comment';
import Post from '@test/integration/jsonrest/models/post';

export default function makeJsonRestAction() {
  const { action, registry } = makeJsonRest({
    baseURL: 'https://example.com/api',
  });

  registry.register(Post, Comment);

  return action;
}
