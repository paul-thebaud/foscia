import context from '@/core/actions/context/enhancers/context';
import { CacheI } from '@/core/types';

export default function withCache<Cache extends CacheI>(cache: Cache) {
  return context({ cache });
}
