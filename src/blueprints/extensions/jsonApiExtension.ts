import { fields, fieldsFor, filterBy, paginate, sortBy, sortByAsc, sortByDesc } from '@/jsonapi';

export default {
  ...filterBy.extension,
  ...fields.extension,
  ...fieldsFor.extension,
  ...sortBy.extension,
  ...sortByAsc.extension,
  ...sortByDesc.extension,
  ...paginate.extension,
};
