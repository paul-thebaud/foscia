import action from './action';
import Post from './models/post';

function mockAction(action) {
  action.mock = new Proxy(action(), {
    get(target, prop, receiver) {
      if (prop === 'use') {
        return () => receiver;
      }

      if (prop === 'run') {
        return () => 'patate';
      }

      return target[prop];
    },
  });

  return action.mock;
}

(async () => {
  mockAction(action);

  const posts = await action()
    .forModel(Post)
    .all();

  console.log(posts);
})();
