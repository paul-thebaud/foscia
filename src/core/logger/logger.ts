const LOGGER_LEVELS = {
  error: 'error',
  warn: 'warn',
  debug: 'debug',
};

const LOGGER_LEVELS_WEIGHTS = {
  [LOGGER_LEVELS.debug]: 0,
  [LOGGER_LEVELS.warn]: 100,
  [LOGGER_LEVELS.error]: 1000,
};

type LoggerLevel = keyof typeof LOGGER_LEVELS;

class Logger {
  public level: LoggerLevel | null = 'warn';

  private logs = new Set<string>();

  public error(message: string) {
    this.message('error', message);
  }

  public warn(message: string) {
    this.message('warn', message);
  }

  public debug(message: string) {
    this.message('debug', message);
  }

  private message(level: LoggerLevel, message: string) {
    if (this.level && LOGGER_LEVELS_WEIGHTS[level] >= LOGGER_LEVELS_WEIGHTS[this.level]) {
      const log = `[${level}] ${message}`;
      if (!this.logs.has(log)) {
        this.logs.add(log);
        console[level](`[foscia]${log}`);
      }
    }
  }
}

export default new Logger();
