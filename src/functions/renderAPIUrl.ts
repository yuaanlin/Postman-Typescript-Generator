import { Items, Request1 } from '../type';
import hasQueryParams from './hasQueryParams';

function renderAPIUrl(item: Items) {
  let res = '';
  const request = item.request as Request1;
  if (!request.url) return '';
  if (typeof request.url !== 'string') {
    if (!request.url.path) return '';
    if (typeof request.url.path === 'string') return request.url.path;
    request.url.path.map((p) => {
      if (typeof p === 'string') {
        if (p.startsWith(':')) {
          res += '/${' + p.replace(':', '') + '}';
          return null;
        }
        res += '/' + p;
      }
      return null;
    });
  }

  if (hasQueryParams(item)) {
    return 'withQuery(`' + res + '`, params)';
  }

  return '`' + res + '`';
}

export default renderAPIUrl;
