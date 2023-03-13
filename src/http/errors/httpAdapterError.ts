import { FosciaError } from '@/core';
import { HttpRequest } from '@/http/types';

export default class HttpAdapterError extends FosciaError {
  public request: HttpRequest;

  public constructor(message: string, request: HttpRequest) {
    super(message);

    this.request = request;
  }
}
