import HttpAdapterError from '@foscia/http/errors/httpAdapterError';
import { HttpRequest } from '@foscia/http/types';

export default class InterruptedError extends HttpAdapterError {
  public source: unknown;

  public constructor(message: string, request: HttpRequest, source: unknown) {
    super(message, request);

    this.source = source;
  }
}
