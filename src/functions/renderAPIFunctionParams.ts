import { Items, Request1, Variable2 } from '../type';
import extractWord from './extractWord';
import getType from './getType';
import hasQueryParams from './hasQueryParams';

function renderAPIFunctionParams(item: Items, folderName: string) {
  let res = '';

  const request = item.request as Request1;

  if (
    typeof request.url !== 'string' &&
    request.url &&
    request.url.variable &&
    request.url.variable.length > 0
  ) {
    request.url.variable.map((p) => {
      const pathParam = p as Variable2;
      res +=
        (res.length === 0 ? '' : ', ') +
        `${pathParam.key}: ${getType(pathParam.description)}`;
      return null;
    });
  }

  if (hasQueryParams(item)) {
    res +=
      (res.length === 0 ? '' : ', ') +
      `params: ${
        extractWord(item.name, true) + extractWord(folderName, true)
      }QueryParams`;
  }

  if (request.body?.formdata)
    res +=
      (res.length === 0 ? '' : ', ') +
      `form: ${
        extractWord(item.name, true) + extractWord(folderName, true)
      }Form`;

  return res;
}

export default renderAPIFunctionParams;
