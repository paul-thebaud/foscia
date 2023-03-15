import { makeJsonRest, restStarterExtensions } from '@/blueprints';
import Comment from './models/comment';
import Post from './models/post';

/*
 *--------------------------------------------
 * Action factory.
 *
 * This is an example of a simple action factory
 * for a JSON REST API backend.
 * We are using the JSONPlaceholder example API here
 * with the JSON REST starter extensions pack.
 *--------------------------------------------
 */

// Creation of our action factory.
const { action, registry } = makeJsonRest({
  baseURL: 'https://jsonplaceholder.typicode.com',
  extensions: restStarterExtensions,
});

// Registration of our models.
registry.register(Comment, Post);

// We export the given "action" factory function
// which we'll use to create and run actions.
export default action;
