import oneOr from '@/core/actions/context/runners/oneOr';
import ExpectedRunFailureError from '@/core/errors/expectedRunFailureError';
import { Model } from '@/core/model/types';

export default function oneOrFail<C extends {}, M extends Model, AD>() {
  return oneOr<C, M, AD, never>(() => {
    throw new ExpectedRunFailureError(
      '`oneOrFail` failed. You may handle this error globally as a "not found" record error.',
    );
  });
}
