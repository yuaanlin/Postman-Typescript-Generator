import { Folder, Items, Request1 } from '../type';
import extractWord from './extractWord';
import isFolder from './isFolder';
import renderAPIReturn from './renderAPIReturn';
import renderAPIUrl from './renderAPIUrl';
import renderTabs from './renderTabs';

function renderItems(
  items: Items[],
  folderName: string = '',
  level: number = 1
): any {
  let res = '';
  items.map((item) => {
    if (isFolder(item)) {
      const folder = (item as any) as Folder;
      res += `
${renderTabs(level)}/* ${folder.name} */
${renderTabs(level)}${extractWord(folder.name)}: {

${renderItems(folder.item, folder.name, level + 1)}${renderTabs(level)}},
`;
      return null;
    } else {
      res += `${renderTabs(level)} /* ${item.name} */
${renderTabs(level)}async ${extractWord(item.name)}(${renderAPIFunctionParams(
        item,
        folderName
      )}) {
${buildRequestForm(item, level + 1)}
${renderTabs(level + 1)}const res = await callAPI(${renderAPIUrl(item)}, 'GET');
${renderTabs(level + 1)}const parsedRes = await res.json();
${renderTabs(level + 1)}if (!isResOk(res)) throw new Error(parsedRes.error);
${renderAPIReturn(item, level + 1)};
${renderTabs(level)}},

`;
      return null;
    }
  });
  return res;
}

function buildRequestForm(item: Items, level: number = 0) {
  let appends = '';
  const request = item.request as Request1;
  if (!request.body?.formdata) return '';
  request.body?.formdata?.map((field) => {
    appends += `
${renderTabs(level)}req.append('${field.key}', form.${field.key});`;
    return null;
  });

  return `
${renderTabs(level)}const req = new FormData();${appends}
`;
}

export default renderItems;
function renderAPIFunctionParams(item: Items, folderName: string) {
  throw new Error('Function not implemented.');
}
