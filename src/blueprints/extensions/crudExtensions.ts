import readExtensions from '@/blueprints/extensions/readExtensions';
import writeExtensions from '@/blueprints/extensions/writeExtensions';

export default {
  ...readExtensions,
  ...writeExtensions,
};
