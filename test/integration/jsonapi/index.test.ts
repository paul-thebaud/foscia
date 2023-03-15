import { all, create, fill, forModel, include, one } from '@/core';
import makeJsonApiAction from '@test/integration/jsonapi/makeJsonApiAction';
import Comment from '@test/integration/jsonapi/models/comment';
import Post from '@test/integration/jsonapi/models/post';
import createFetchMock from '@test/utilities/http/createFetchMock';
import createFetchResponse from '@test/utilities/http/createFetchResponse';
import { describe, expect, it } from 'vitest';

describe.concurrent('JSON:API', () => {
  it('should fetch: all records', async () => {
    const fetchMock = createFetchMock();
    fetchMock.mockImplementationOnce(createFetchResponse().json({
      data: [
        {
          type: 'posts',
          id: '1',
          attributes: { title: 'Foo', body: 'Foo Body' },
          relationships: {
            comments: { data: [{ type: 'comments', id: '1' }, { type: 'comments', id: '2' }] },
          },
        },
        {
          type: 'posts',
          id: '2',
          attributes: { title: 'Bar', body: 'Bar Body' },
          relationships: {
            comments: { data: [] },
          },
        },
      ],
      included: [
        {
          type: 'comments',
          id: '1',
          attributes: { body: 'Foo Comment' },
        },
        {
          type: 'comments',
          id: '2',
          attributes: { body: 'Bar Comment' },
        },
      ],
    }));

    const action = makeJsonApiAction();

    const posts = await action()
      .use(forModel(Post))
      .use(include('comments'))
      .run(all());

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith('https://example.com/api/v1/posts?include=comments', {
      method: 'GET',
      signal: undefined,
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
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
      data: {
        type: 'posts',
        id: '1',
        attributes: { title: 'Foo', body: 'Foo Body' },
      },
    }));

    const action = makeJsonApiAction();

    const post = fill(new Post(), { title: 'Foo', body: 'Foo Body' });

    const createdPost = await action()
      .use(create(post))
      .run(one());

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith('https://example.com/api/v1/posts', {
      method: 'POST',
      signal: undefined,
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: {
          type: 'posts',
          attributes: { title: 'Foo', body: 'Foo Body' },
          relationships: {},
        },
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
