import cachedOr from '@/core/actions/context/runners/cachedOr';
import { ActionContext } from '@/core/actions/types';
import ExpectedRunFailureError from '@/core/errors/expectedRunFailureError';
import { Model } from '@/core/model/types';

export default function cachedOrFail<M extends Model>() {
  return cachedOr<ActionContext, M, never>(() => {
    throw new ExpectedRunFailureError(
      '`cachedOrFail` failed. You may handle this error globally as a "not found" record error.',
    );
  });
}
