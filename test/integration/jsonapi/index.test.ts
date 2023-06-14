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
import makeJsonApiAction from '@test/integration/jsonapi/makeJsonApiAction';
import createFetchMock from '@test/utilities/http/createFetchMock';
import createFetchResponse from '@test/utilities/http/createFetchResponse';
import Comment from '@test/utilities/models/comment';
import Post from '@test/utilities/models/post';
import { describe, expect, it, vi } from 'vitest';

describe.concurrent('JSON:API integration', () => {
  it('should run action: all records', async () => {
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
      data: {
        type: 'posts',
        id: '1',
        attributes: { title: 'Foo', body: 'Foo Body' },
      },
    }));

    const action = makeJsonApiAction();

    const post = fill(new Post(), { title: 'Foo', body: 'Foo Body' });

    const createdPost = await action()
      .use(save(post))
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
    expect(post.exists).toStrictEqual(true);
    expect(post.id).toStrictEqual('1');
    expect(post.title).toStrictEqual('Foo');
    expect(post.body).toStrictEqual('Foo Body');
    expect(post.comments).toBeUndefined();
  });

  it('should run action: update record', async () => {
    const fetchMock = createFetchMock();
    fetchMock.mockImplementationOnce(createFetchResponse().json({
      data: {
        type: 'posts',
        id: '1',
        attributes: { title: 'Foo', body: 'Bar Body' },
      },
    }));

    const notChangedMock = vi.fn(() => null);

    const action = makeJsonApiAction();

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
    expect(fetchMock).toHaveBeenCalledWith('https://example.com/api/v1/posts/1', {
      method: 'PATCH',
      signal: undefined,
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: {
          type: 'posts',
          id: '1',
          attributes: { body: 'Bar Body' },
          relationships: {},
        },
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

    const action = makeJsonApiAction();

    const post = fill(new Post(), { title: 'Foo', body: 'Foo Body' });
    post.id = '1';
    post.exists = true;
    markSynced(post);

    const data = await action()
      .use(destroy(post))
      .run(one());

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(fetchMock).toHaveBeenCalledWith('https://example.com/api/v1/posts/1', {
      method: 'DELETE',
      signal: undefined,
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
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
