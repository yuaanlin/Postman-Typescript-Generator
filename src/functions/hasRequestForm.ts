import { Items, Request1 } from '../type';

function hasRequestForm(item: Items) {
  const request = item.request as Request1;
  return !!request.body?.formdata;
}

export default hasRequestForm;
