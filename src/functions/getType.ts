import { DefinitionsDescription, Description } from '../type';

const typeMapping = [
  { type: 'number', keywords: ['int', 'number', 'Int', 'Number'] },
  { type: 'Date', keywords: ['Date', 'date', 'time', 'Time'] },
];

function getType(p: string | null | undefined | DefinitionsDescription) {
  let s = '';
  if (typeof p === 'string') s = p;
  else if (typeof p === 'object') {
    const d = p as Description;
    s = d.content || '';
  }

  let t: string | undefined;
  typeMapping.map((tm) => {
    if (tm.keywords.some((k) => s.includes(k))) {
      t = tm.type;
    }
    return null;
  });

  if (t) return t;
  return 'string';
}

export default getType;
