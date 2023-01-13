import oneOr from '@/core/actions/context/runners/oneOr';
import { ActionContext } from '@/core/actions/types';
import ExpectedRunFailureError from '@/core/errors/expectedRunFailureError';
import { Model } from '@/core/model/types';

export default function oneOrFail<M extends Model>() {
  return oneOr<ActionContext, M, unknown, never>(() => {
    throw new ExpectedRunFailureError(
      '`oneOrFail` failed. You may handle this error globally as a "not found" record error.',
    );
  });
}
