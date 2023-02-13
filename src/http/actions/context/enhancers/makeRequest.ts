import { context } from '@/core';
import { HttpRequestConfig } from '@/http/types';

function decomposeURL(pathOrBaseURL: string) {
  if (/^(\/|(https?|s?ftp):)/.test(pathOrBaseURL)) {
    return { baseURL: pathOrBaseURL };
  }

  return { path: pathOrBaseURL };
}

export default function makeRequest(
  pathOrBaseURL: string,
  config?: HttpRequestConfig,
) {
  return context({ ...decomposeURL(pathOrBaseURL), ...config });
}
