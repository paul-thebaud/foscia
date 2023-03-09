import { ModelInstance } from '@/core';
import { AllUsingData } from '@/core/actions/context/runners/allUsing';
import { OneUsingData } from '@/core/actions/context/runners/oneUsing';
import { JsonApiDeserializedData } from '@/jsonapi/deserializer/jsonApiDeserializer';

/**
 * Append the JSON:API document object to data object.
 * Use it as the parameter of `allUsing` and `oneUsing` runners.
 *
 * @param data
 */
export default function usingDocument<
  I extends ModelInstance,
  DD extends JsonApiDeserializedData<I>,
  D extends OneUsingData<Response, DD, I> | AllUsingData<Response, DD, I>,
>(data: D) {
  return {
    ...data,
    document: data.deserialized.document,
  };
}
