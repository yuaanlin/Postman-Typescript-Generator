import { Folder, Item } from '../type';

function isFolder(item: Item | Folder) {
  return typeof item.item !== 'undefined';
}

export default isFolder;
