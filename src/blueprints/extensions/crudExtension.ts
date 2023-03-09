import readExtensions from '@/blueprints/extensions/readExtension';
import writeExtensions from '@/blueprints/extensions/writeExtension';

export default {
  ...readExtensions,
  ...writeExtensions,
};
