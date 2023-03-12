import { all, cached, cachedOrFail, cachedOr, none, one, oneOr, oneOrCurrent, oneOrFail, raw } from '@/core';

export default {
  ...all.extension,
  ...one.extension,
  ...oneOrFail.extension,
  ...oneOrCurrent.extension,
  ...oneOr.extension,
  ...none.extension,
  ...raw.extension,
  ...cached.extension,
  ...cachedOrFail.extension,
  ...cachedOr.extension,
};
