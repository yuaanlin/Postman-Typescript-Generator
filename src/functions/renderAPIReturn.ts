import { Items, Request1 } from '../type';
import extractWord from './extractWord';
import renderTabs from './renderTabs';

export function getAPIResponseType(item: Items) {
  const request = item.request as Request1;

  if (!request.description) return `any`;

  let d = '';

  if (typeof request.description === 'string') {
    d = request.description;
  } else if (
    typeof request.description === 'object' &&
    request.description.content
  ) {
    d = request.description.content;
  }

  const lines = d.split('\n');

  let isNext = false;
  let responseType = '';
  lines.map((line) => {
    if (isNext) responseType = line;
    if (line.startsWith('#') && line.includes('Response')) isNext = true;
    return null;
  });

  return responseType;
}

function renderAPIReturn(item: Items, level: number = 0) {
  const request = item.request as Request1;

  if (!request.description)
    return `
${renderTabs(
  level
)}// Please declare the API response type in the postman documention!
${renderTabs(level)}return parsedRes as any`;

  let responseType = getAPIResponseType(item);

  if (responseType.endsWith('[]')) {
    responseType = responseType.replace('[]', '');
    return `
${renderTabs(
  level
)}return parsedRes.map((r: ${responseType}) => parse${extractWord(
      responseType,
      true
    )}(r)) as ${responseType}[]`;
  }

  return `
${renderTabs(level)}return parse${responseType}(parsedRes)`;
}

export default renderAPIReturn;
