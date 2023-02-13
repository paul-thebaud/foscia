import { AllUsingData } from '@/core/actions/context/runners/allUsing';
import { OneUsingData } from '@/core/actions/context/runners/oneUsing';
import { ModelInstance } from '@/core/model/types';
import { JsonApiDeserializedData } from '@/jsonapi/deserializer/jsonApiDeserializer';

// TODO Unify by returning document.
export default function usingDocument() {
  return <
    I extends ModelInstance,
    DD extends JsonApiDeserializedData<I>,
    D extends OneUsingData<Response, DD, I> | AllUsingData<Response, DD, I>,
  >(data: D) => ({
    ...data,
    document: data.deserialized.document,
  });
}
