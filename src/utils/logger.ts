type LoggerFn = {
  (message?: unknown, ...extras: unknown[]): void;
};

type Logger = {
  log: LoggerFn;
  warn: LoggerFn;
  error: LoggerFn;
  info: LoggerFn;
};

export const logger: Logger = {
  log: (message?: unknown, ...extras: unknown[]) => {
    console.log(message, extras);
  },

  warn: (message?: unknown, ...extras: unknown[]) => {
    console.warn(message, extras);
  },

  error: (message?: unknown, ...extras: unknown[]) => {
    console.error(message, extras);
  },

  info: (message?: unknown, ...extras: unknown[]) => {
    console.info(message, extras);
  },
};
