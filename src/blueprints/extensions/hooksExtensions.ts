import onError from '@/core/actions/context/enhancers/hooks/onError';
import onFinally from '@/core/actions/context/enhancers/hooks/onFinally';
import onPreparing from '@/core/actions/context/enhancers/hooks/onPreparing';
import onRunning from '@/core/actions/context/enhancers/hooks/onRunning';
import onSuccess from '@/core/actions/context/enhancers/hooks/onSuccess';

export default {
  ...onPreparing.extension,
  ...onRunning.extension,
  ...onSuccess.extension,
  ...onError.extension,
  ...onFinally.extension,
};
