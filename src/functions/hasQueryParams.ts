import { Items, Request1 } from '../type';

function hasQueryParams(item: Items) {
  const request = item.request as Request1;
  return (
    typeof request.url !== 'string' &&
    request.url?.query &&
    request.url.query.length > 0
  );
}

export default hasQueryParams;
