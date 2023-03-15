import { HttpActionContext, HttpAdapter } from '@/http';
import { isNone, optionalJoin } from '@/utilities';

/**
 * Adapter implementation for JSON:API.
 */
export default class JsonApiAdapter extends HttpAdapter {
  /**
   * @inheritDoc
   */
  protected makeRequestURLParams(context: HttpActionContext) {
    const params = optionalJoin([
      super.makeRequestURLParams(context),
      this.makeIncludeParam(context),
    ], '&');

    return isNone(params) ? undefined : params;
  }

  /**
   * Create an adapted include URL param for given context.
   *
   * @param context
   */
  protected makeIncludeParam(context: HttpActionContext) {
    if (isNone(context.include)) {
      return undefined;
    }

    return this.makeRequestURLParamsFromObject(context, {
      include: optionalJoin(context.include, ','),
    });
  }
}
