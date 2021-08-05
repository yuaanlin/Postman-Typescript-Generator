import { Items, Request1 } from '../type';

export function getAPIMethod(item: Items) {
  const request = item.request as Request1;
  if (!request.method) return 'GET';
  return request.method;
}

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

  return '`' + res + '`';
}

export default renderAPIUrl;
