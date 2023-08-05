import { context } from '@/core/actions';
import makeFakeAction from '@test/utilities/makeFakeAction';
import { describe, expect, it } from 'vitest';

describe.concurrent('unit: context', () => {
  it('should use merged contexts', async () => {
    const action = makeFakeAction();

    action.updateContext({ foo: 'foo', bar: 'bar' });
    action.use(context({ bar: 'foo', baz: 'baz' }));

    expect(await action.useContext()).toStrictEqual({ foo: 'foo', bar: 'foo', baz: 'baz' });
  });
});
