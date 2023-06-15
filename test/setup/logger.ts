import { logger } from '@/core';
import { afterAll, beforeAll } from 'vitest';

let prevLoggerLevel: typeof logger['level'];

beforeAll(() => {
  prevLoggerLevel = logger.level;
  logger.level = null;
});

afterAll(() => {
  logger.level = prevLoggerLevel;
});
