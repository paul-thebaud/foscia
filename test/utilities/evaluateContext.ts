import { context } from '@/core/actions';
import { ContextEnhancer } from '@/core/actions/types';
import makeFakeAction from '@test/utilities/makeFakeAction';

export default function evaluateContext(
  callback: ContextEnhancer<any, {}, any>,
  initial?: any,
): Promise<any> {
  return makeFakeAction()
    .use(context(initial ?? {}))
    .use(callback as any)
    .useContext();
}
