import { fields, fieldsFor, filterBy, paginate, sortBy, sortByDesc } from '@/jsonapi';

export default {
  ...filterBy.extension,
  ...fields.extension,
  ...fieldsFor.extension,
  ...sortBy.extension,
  ...sortByDesc.extension,
  ...paginate.extension,
};
