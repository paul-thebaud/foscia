import { ModelInstance } from '@/core';
import { WithStoreContext } from '@/core/action/changers/useStore';
import { ActionContext } from '@/core/action/types';
import { Store } from '@/core/store/types';
import makeRequestInit from '@/extensions/fetch-json-api/requests/makeRequestInit';
import makeURL from '@/extensions/fetch-json-api/requests/makeURL';
import deserializeMany from '@/extensions/fetch-json-api/serialization/deserializeMany';
import deserializeOne from '@/extensions/fetch-json-api/serialization/deserializeOne';
import makeIncludedMap from '@/extensions/fetch-json-api/serialization/makeIncludedMap';
import serializeOne from '@/extensions/fetch-json-api/serialization/serializeOne';
import { FetchJsonApiFactoryOptions } from '@/extensions/fetch-json-api/types';

export default function makeFetchJsonApi(
  options: FetchJsonApiFactoryOptions = {},
) {
  const baseURL = options.baseURL || '/api';
  const fetch = options.fetch || window.fetch;

  return {
    async action(context: ActionContext) {
      try {
        const response = await fetch(
          makeURL(baseURL, context),
          makeRequestInit(context),
        );
        if (!response.ok) {
          // TODO Manage errors.
        }

        return response;
      } catch (error) {
        throw new Error();
      }
    },
    async serializeOne(
      model: ModelInstance,
    ) {
      return serializeOne(model);
    },
    async deserializeOne(
      context: WithStoreContext<ActionContext, Store>,
      response: Response,
    ) {
      const body = await response.json();
      const includedMap = makeIncludedMap(body.included || []);

      return deserializeOne(context, body.data, includedMap);
    },
    async deserializeMany(
      context: WithStoreContext<ActionContext, Store>,
      response: Response,
    ) {
      const body = await response.json();
      const includedMap = makeIncludedMap(body.included || []);

      return deserializeMany(context, body.data, includedMap);
    },
  };
}
