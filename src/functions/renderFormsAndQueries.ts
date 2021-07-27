import { Folder, Items } from '../type';
import isFolder from './isFolder';
import renderParamInterface from './renderParamInterface';

function renderFormsAndQueries(items: Items[], folderName: string = '') {
  let res = '';
  items.map((item) => {
    if (isFolder(item)) {
      const folder = (item as any) as Folder;
      res += renderFormsAndQueries(folder.item, folder.name);
      return null;
    } else {
      res += renderParamInterface(item, folderName);
      return null;
    }
  });
  return res;
}

export default renderFormsAndQueries;
