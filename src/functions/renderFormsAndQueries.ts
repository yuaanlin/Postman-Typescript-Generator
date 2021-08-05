import { Folder, Items } from '../type';
import isFolder from './isFolder';
import {
  renderFormInterface,
  renderQueryInterface,
} from './renderParamInterface';

export function renderQueries(items: Items[], folderName: string = '') {
  let res = '';
  items.map((item) => {
    if (isFolder(item)) {
      const folder = (item as any) as Folder;
      res += renderQueries(folder.item, folder.name);
      return null;
    } else {
      res += renderQueryInterface(item, folderName);
      return null;
    }
  });
  return res;
}

export function renderForms(items: Items[], folderName: string = '') {
  let res = '';
  items.map((item) => {
    if (isFolder(item)) {
      const folder = (item as any) as Folder;
      res += renderForms(folder.item, folder.name);
      return null;
    } else {
      res += renderFormInterface(item, folderName);
      return null;
    }
  });
  return res;
}
