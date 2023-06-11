import { makeJsonRest, restStarterExtensions } from '@/blueprints';
import Comment from '@test/utilities/models/comment';
import Post from '@test/utilities/models/post';
import User from '@test/utilities/models/user';

const { action, registry } = makeJsonRest({
  baseURL: 'https://example.com',
  extensions: restStarterExtensions,
});

registry.register(Comment, Post, User);

export default action;
