import {
  all,
  changed,
  destroy,
  fill,
  forModel,
  include,
  markSynced,
  none,
  one,
  save,
  when,
} from '@/core';
import makeJsonRestAction from '@test/integration/jsonrest/makeJsonRestAction';
import createFetchMock from '@test/utilities/http/createFetchMock';
import createFetchResponse from '@test/utilities/http/createFetchResponse';
import Comment from '@test/utilities/models/comment';
import Post from '@test/utilities/models/post';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('integration: JSON REST', () => {
  it('should run action: all records', async () => {
    const fetchMock = createFetchMock();
    fetchMock.mockImplementationOnce(createFetchResponse().json([
      {
        id: '1',
        title: 'Foo',
        body: 'Foo Body',
        comments: [
          {
            id: '1',
            body: 'Foo Comment',
          },
          {
            id: '2',
            body: 'Bar Comment',
          },
        ],
      },
      {
        id: '2',
        title: 'Bar',
        body: 'Bar Body',
        comments: [],
      },
    ]));

    const action = makeJsonRestAction();

    const posts = await action()
      .use(forModel(Post))
      .use(include('comments'))
      .run(all());

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith('https://example.com/api/posts', {
      method: 'GET',
      signal: undefined,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: undefined,
    });

    expect(posts).toHaveLength(2);

    expect(posts[0]).toBeInstanceOf(Post);
    expect(posts[0].exists).toStrictEqual(true);
    expect(posts[0].id).toStrictEqual('1');
    expect(posts[0].title).toStrictEqual('Foo');
    expect(posts[0].body).toStrictEqual('Foo Body');
    expect(posts[0].comments).toHaveLength(2);
    expect(posts[0].comments[0].exists).toStrictEqual(true);
    expect(posts[0].comments[0]).toBeInstanceOf(Comment);
    expect(posts[0].comments[0].id).toStrictEqual('1');
    expect(posts[0].comments[0].body).toStrictEqual('Foo Comment');
    expect(posts[0].comments[1].exists).toStrictEqual(true);
    expect(posts[0].comments[1]).toBeInstanceOf(Comment);
    expect(posts[0].comments[1].id).toStrictEqual('2');
    expect(posts[0].comments[1].body).toStrictEqual('Bar Comment');

    expect(posts[1]).toBeInstanceOf(Post);
    expect(posts[1].exists).toStrictEqual(true);
    expect(posts[1].id).toStrictEqual('2');
    expect(posts[1].title).toStrictEqual('Bar');
    expect(posts[1].body).toStrictEqual('Bar Body');
    expect(posts[1].comments).toHaveLength(0);
  });

  it('should run action: create record', async () => {
    const fetchMock = createFetchMock();
    fetchMock.mockImplementationOnce(createFetchResponse().json({
      id: '1',
      title: 'Foo',
      body: 'Foo Body',
    }));

    const action = makeJsonRestAction();

    const post = fill(new Post(), { title: 'Foo', body: 'Foo Body' });

    const createdPost = await action()
      .use(save(post))
      .run(one());

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith('https://example.com/api/posts', {
      method: 'POST',
      signal: undefined,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Foo',
        body: 'Foo Body',
      }),
    });

    expect(post).toStrictEqual(createdPost);
    expect(post).toBeInstanceOf(Post);
    expect(post.exists).toStrictEqual(true);
    expect(post.id).toStrictEqual('1');
    expect(post.title).toStrictEqual('Foo');
    expect(post.body).toStrictEqual('Foo Body');
    expect(post.comments).toBeUndefined();
  });

  it('should run action: update record', async () => {
    const fetchMock = createFetchMock();
    fetchMock.mockImplementationOnce(createFetchResponse().json({
      id: '1',
      title: 'Foo',
      body: 'Bar Body',
    }));

    const notChangedMock = vi.fn(() => null);

    const action = makeJsonRestAction();

    const post = fill(new Post(), { title: 'Foo', body: 'Foo Body' });
    post.id = '1';
    post.exists = true;
    markSynced(post);

    await action()
      .use(save(post))
      .run(when(changed(post), none(), notChangedMock));

    fill(post, { body: 'Bar Body' });

    const updatedPost = await action()
      .use(save(post))
      .run(when(changed(post), one(), notChangedMock));

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith('https://example.com/api/posts/1', {
      method: 'PATCH',
      signal: undefined,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '1',
        body: 'Bar Body',
      }),
    });

    expect(notChangedMock).toHaveBeenCalledOnce();

    expect(post).toStrictEqual(updatedPost);
    expect(post).toBeInstanceOf(Post);
    expect(post.exists).toStrictEqual(true);
    expect(post.id).toStrictEqual('1');
    expect(post.title).toStrictEqual('Foo');
    expect(post.body).toStrictEqual('Bar Body');
    expect(post.comments).toBeUndefined();
  });

  it('should run action: destroy record', async () => {
    const fetchMock = createFetchMock();
    fetchMock.mockImplementationOnce(createFetchResponse().noContent());

    const action = makeJsonRestAction();

    const post = fill(new Post(), { title: 'Foo', body: 'Foo Body' });
    post.id = '1';
    post.exists = true;
    markSynced(post);

    const data = await action()
      .use(destroy(post))
      .run(one());

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith('https://example.com/api/posts/1', {
      method: 'DELETE',
      signal: undefined,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: undefined,
    });

    expect(data).toBeNull();
    expect(post).toBeInstanceOf(Post);
    expect(post.exists).toStrictEqual(false);
    expect(post.id).toStrictEqual('1');
    expect(post.title).toStrictEqual('Foo');
    expect(post.body).toStrictEqual('Foo Body');
    expect(post.comments).toBeUndefined();
  });
});
