import { makeModel } from '@foscia/core';
import { forModel } from '@foscia/core/actions';
import { describe, expect, it } from 'vitest';
import evaluateContext from '../../../../utils/evaluateContext';

describe.concurrent('unit: forModel', () => {
  it('should use model without configuration', async () => {
    const Model = makeModel('BlogPosts');

    expect(await evaluateContext(forModel(Model))).toStrictEqual({
      model: Model,
      modelPath: 'BlogPosts',
      baseURL: undefined,
    });
  });

  it('should use model with basic configuration', async () => {
    const Model = makeModel({
      type: 'BlogPosts',
      normalizePath: (v) => v.toUpperCase(),
      baseURL: 'https://example.com/api/blog-posts',
    });

    expect(await evaluateContext(forModel(Model))).toStrictEqual({
      model: Model,
      modelPath: 'BLOGPOSTS',
      baseURL: 'https://example.com/api/blog-posts',
    });
  });

  it('should use model with advanced configuration', async () => {
    const Model = makeModel({
      type: 'BlogPosts',
      normalizePath: (v) => v.toUpperCase(),
      normalizeModelPath: (v) => v.toLowerCase(),
      baseURL: 'https://example.com/api/blog-posts',
    });

    expect(await evaluateContext(forModel(Model))).toStrictEqual({
      model: Model,
      modelPath: 'blogposts',
      baseURL: 'https://example.com/api/blog-posts',
    });
  });
});
