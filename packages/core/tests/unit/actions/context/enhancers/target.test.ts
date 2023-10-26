import { target } from '@foscia/core/actions';
import { describe, expect, it } from 'vitest';
import evaluateContext from '../../../../utils/evaluateContext';
import PostMock from '../../../../mocks/models/post.mock';

describe.concurrent('unit: target', () => {
  it('should use model as target', async () => {
    expect(await evaluateContext(target(PostMock))).toStrictEqual({ model: PostMock });
  });
});
