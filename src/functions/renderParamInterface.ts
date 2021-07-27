import { Items, Request1 } from '../type';
import extractWord from './extractWord';
import getType from './getType';
import hasQueryParams from './hasQueryParams';
import hasRequestForm from './hasRequestForm';
import renderTabs from './renderTabs';

function renderParamInterface(item: Items, folderName: string = '') {
  const request = item.request as Request1;
  if (hasQueryParams(item)) {
    const interfaceName =
      extractWord(item.name, true) +
      extractWord(folderName, true) +
      'QueryParams';

    if (typeof request.url === 'string') return '';

    let content = '';
    request.url?.query?.map((q) => {
      content += `
${renderTabs(1)}${q.key}: ${getType(q.description)}`;
      return null;
    });

    return `
interface ${interfaceName} {${content}
}
`;
  }

  if (hasRequestForm(item)) {
    const interfaceName =
      extractWord(item.name, true) + extractWord(folderName, true) + 'Form';

    if (!request.body?.formdata) return '';
    let content = '';
    request.body.formdata.map((f) => {
      content += `
${renderTabs(1)}${f.key}: ${getType(f.description)}`;
      return null;
    });

    return `
interface ${interfaceName} {${content}
}
`;
  }

  return '';
}

export default renderParamInterface;
