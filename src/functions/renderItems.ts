import { Folder, Items, Request1 } from '../type';
import extractWord from './extractWord';
import isFolder from './isFolder';
import renderAPIFunctionParams from './renderAPIFunctionParams';
import renderAPIReturn, { getAPIResponseType } from './renderAPIReturn';
import renderAPIUrl, { getAPIMethod } from './renderAPIUrl';
import renderTabs from './renderTabs';

function renderAPI(item: Items, folderName: string, level = 0): string {
  const request = item.request as Request1;
  return `${renderTabs(level)}/* ${item.name} */
${renderTabs(level)}export async function ${extractWord(
    item.name,
    false
  )}(${renderAPIFunctionParams(
    item,
    folderName
  )}): Promise<${getAPIResponseType(item)}>{
${renderTabs(level + 1)}${request.method === 'POST' ? 'const params = {};' : 'const req = undefined;'}
${buildRequestForm(item, level + 1)}
${renderTabs(level + 1)}const res = await request<${getAPIResponseType(item)}>('${getAPIMethod(
    item
  )}', ${renderAPIUrl(item)}, req, params);
${renderTabs(level + 1)}const parsedRes = res.data;
${renderAPIReturn(item, level + 1)};
${renderTabs(level)}}

`;
}

function renderItem(item: Folder, folderName: string, level = 0): string {
  let res = '';
  item.item.map((item) => {
    res += renderAPI(item, folderName, level);
    return null;
  });
  return res;
}

function renderItems(
  items: Items[],
  level: number = 0
): { fileName: string; content: string }[] {
  let res: { fileName: string; content: string }[] = [];
  items.map((item) => {
    if (isFolder(item)) {
      const folder = (item as any) as Folder;
      res.push({
        fileName: `src/service/${extractWord(folder.name, false)}.ts`,
        content: renderItem(folder, folder.name || 'unknow', level),
      });
    }
    return null;
  });

  return res;
}

function buildRequestForm(item: Items, level: number = 0) {
  let appends = '';
  const request = item.request as Request1;
  if (!request.body?.formdata) return '';
  request.body?.formdata?.map((field) => {
    appends += `
${renderTabs(level)}req.append('${field.key}', form.${field.key}.toString());`;
    return null;
  });

  return `
${renderTabs(level)}const req = new FormData();${appends}
`;
}

export default renderItems;
