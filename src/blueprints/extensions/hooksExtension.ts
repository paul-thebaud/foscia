import { onError, onFinally, onRunning, onSuccess } from '@/core';

export default {
  ...onRunning.extension,
  ...onSuccess.extension,
  ...onError.extension,
  ...onFinally.extension,
};
