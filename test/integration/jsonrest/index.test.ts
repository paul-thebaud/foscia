import { all, create, fill, forModel, include, one } from '@/core';
import makeJsonRestAction from '@test/integration/jsonrest/makeJsonRestAction';
import Comment from '@test/integration/jsonrest/models/comment';
import Post from '@test/integration/jsonrest/models/post';
import createFetchMock from '@test/utilities/http/createFetchMock';
import createFetchResponse from '@test/utilities/http/createFetchResponse';
import { describe, expect, it } from 'vitest';

describe.concurrent('JSON REST', () => {
  it('should fetch: all records', async () => {
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
    expect(posts[0].id).toStrictEqual('1');
    expect(posts[0].title).toStrictEqual('Foo');
    expect(posts[0].body).toStrictEqual('Foo Body');
    expect(posts[0].comments).toHaveLength(2);
    expect(posts[0].comments[0]).toBeInstanceOf(Comment);
    expect(posts[0].comments[0].id).toStrictEqual('1');
    expect(posts[0].comments[0].body).toStrictEqual('Foo Comment');
    expect(posts[0].comments[1]).toBeInstanceOf(Comment);
    expect(posts[0].comments[1].id).toStrictEqual('2');
    expect(posts[0].comments[1].body).toStrictEqual('Bar Comment');

    expect(posts[1]).toBeInstanceOf(Post);
    expect(posts[1].id).toStrictEqual('2');
    expect(posts[1].title).toStrictEqual('Bar');
    expect(posts[1].body).toStrictEqual('Bar Body');
    expect(posts[1].comments).toHaveLength(0);
  });

  it('should fetch: create record', async () => {
    const fetchMock = createFetchMock();
    fetchMock.mockImplementationOnce(createFetchResponse().json({
      id: '1',
      title: 'Foo',
      body: 'Foo Body',
    }));

    const action = makeJsonRestAction();

    const post = fill(new Post(), { title: 'Foo', body: 'Foo Body' });

    const createdPost = await action()
      .use(create(post))
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
    expect(post.id).toStrictEqual('1');
    expect(post.title).toStrictEqual('Foo');
    expect(post.body).toStrictEqual('Foo Body');
    expect(post.comments).toBeUndefined();
  });
});
