function extractWord(
  word: string | undefined,
  firstUppercase: boolean = false
) {
  if (!word) return '';
  let res = '';
  word.split('').map((c) => isLetter(c) && (res += c));
  if (firstUppercase) res = res.charAt(0).toUpperCase() + res.slice(1);
  return res;
}

function isLetter(str: string) {
  return str.length === 1 && str.match(/[a-z]/i);
}

export default extractWord;
