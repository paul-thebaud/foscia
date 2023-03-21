import { onError, onFinally, onPreparing, onRunning, onSuccess } from '@/core';

export default {
  ...onPreparing.extension,
  ...onRunning.extension,
  ...onSuccess.extension,
  ...onError.extension,
  ...onFinally.extension,
};
