import context from '@/core/actions/context/enhancers/context';
import { AdapterI } from '@/core/types';

export default function withAdapter<Data, Adapter extends AdapterI<Data>>(adapter: Adapter) {
  return context({ adapter });
}
