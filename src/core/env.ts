declare const process: undefined | {
  env: { NODE_ENV: string; };
};

// eslint-disable-next-line import/prefer-default-export
export const IS_DEV = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';
