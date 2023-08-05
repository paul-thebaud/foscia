import { forRelation, hasMany, makeModel } from '@/core';
import evaluateContext from '@test/utilities/evaluateContext';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: forRelation', () => {
  it('should use instance without configuration', async () => {
    const Model = makeModel('blog-posts', {
      latestComments: hasMany(),
    });
    const model = new Model();

    expect(await evaluateContext(forRelation(model, 'latestComments'))).toStrictEqual({
      model: Model,
      modelPath: 'blog-posts',
      baseURL: undefined,
      instance: model,
      id: undefined,
      relationPath: 'latestComments',
      relation: Model.$schema.latestComments,
    });
  });

  it('should use instance with basic configuration', async () => {
    const Model = makeModel({
      type: 'blog-posts',
      normalizePath: (v) => v.toUpperCase(),
    }, {
      latestComments: hasMany(),
    });
    const model = new Model();

    expect(await evaluateContext(forRelation(model, 'latestComments'))).toStrictEqual({
      model: Model,
      modelPath: 'BLOG-POSTS',
      baseURL: undefined,
      instance: model,
      id: undefined,
      relationPath: 'LATESTCOMMENTS',
      relation: Model.$schema.latestComments,
    });
  });

  it('should use instance with advanced configuration', async () => {
    const Model = makeModel({
      type: 'blog-posts',
      normalizePath: (v) => v.toUpperCase(),
      normalizeRelationPath: (v) => v.toLowerCase(),
    }, {
      latestComments: hasMany({ path: 'dummyComments' }),
    });
    const model = new Model();

    expect(await evaluateContext(forRelation(model, 'latestComments'))).toStrictEqual({
      model: Model,
      modelPath: 'BLOG-POSTS',
      baseURL: undefined,
      instance: model,
      id: undefined,
      relationPath: 'dummycomments',
      relation: Model.$schema.latestComments,
    });
  });
});
