import action from './action';
import Post from './models/post';

(async () => {
  const posts = await action()
    .forModel(Post)
    .all();

  console.log(posts);
})();
