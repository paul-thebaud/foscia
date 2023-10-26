import { abortSignal, makeDelete, makeGet, makePatch, makePost, makePut, makeRequest, param } from '@foscia/http';

export default {
  ...makeGet.extension,
  ...makePost.extension,
  ...makePut.extension,
  ...makePatch.extension,
  ...makeDelete.extension,
  ...makeRequest.extension,
  ...param.extension,
  ...abortSignal.extension,
};
