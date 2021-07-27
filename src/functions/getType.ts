import { DefinitionsDescription, Description } from '../type';

function getType(p: string | null | undefined | DefinitionsDescription) {
  let s = '';
  if (typeof p === 'string') s = p;
  else if (typeof p === 'object') {
    const d = p as Description;
    s = d.content || '';
  }
  if (s.includes('int') || s.includes('number')) return 'number';
  return 'string';
}

export default getType;
