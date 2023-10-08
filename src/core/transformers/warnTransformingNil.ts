import logger from '@/core/logger/logger';
import { isNil } from '@/utilities';

export default function warnTransformingNil(transformer: string, value: unknown) {
  if (isNil(value)) {
    logger.warn(
      `Transforming null or undefined value using \`${transformer}\` is not enabled. Pass \`{ nullable: true }\` options to your transformer to enable it.`,
    );
  }
}
