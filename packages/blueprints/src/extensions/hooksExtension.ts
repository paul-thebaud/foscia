import { onError, onFinally, onRunning, onSuccess } from '@foscia/core';

export default {
  ...onRunning.extension,
  ...onSuccess.extension,
  ...onError.extension,
  ...onFinally.extension,
};
