import HttpAdapterError from '@foscia/http/errors/httpAdapterError';
import { HttpRequest } from '@foscia/http/types';

export default abstract class ResponseError extends HttpAdapterError {
  public response: Response;

  public constructor(
    request: HttpRequest,
    response: Response,
  ) {
    super(response.statusText, request);

    this.response = response;
  }
}
