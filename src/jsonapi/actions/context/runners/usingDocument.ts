import { AllUsingData } from '@/core/actions/context/runners/allUsing';
import { OneUsingData } from '@/core/actions/context/runners/oneUsing';
import { ModelInstance } from '@/core/model/types';
import { JsonApiDeserializedData } from '@/jsonapi/deserializer/jsonApiDeserializer';

export default function usingDocument<
  I extends ModelInstance,
  DD extends JsonApiDeserializedData<I>,
  D extends OneUsingData<Response, DD, I> | AllUsingData<Response, DD, I>,
>(data: D) {
  return {
    ...data,
    meta: data.deserialized.document.meta ?? {},
    links: data.deserialized.document.links,
    jsonapi: data.deserialized.document.jsonapi,
  };
}
