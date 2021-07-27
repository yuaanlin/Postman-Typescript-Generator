const helperFunctions = `const camelToSnakeCase = (str: string) =>
str.replace(/[A-Z]/g, (letter) => \`_\${letter.toLowerCase()}\`);

function withQuery(path: string, query: Object) {
  let newPath = path;
  if (!path.endsWith('/')) {
    newPath += '/';
  }
  newPath += '?';
  Object.entries(query).forEach(
    ([key, value]) => (newPath += \`&\${camelToSnakeCase(key)}=\${value}\`)
  );
  return newPath;
}

function isResOk(res: Response) {
	return Math.round(res.status / 100) === 2;
}`;

export default helperFunctions;
