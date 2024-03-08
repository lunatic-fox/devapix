export default function literalStringTab(str: string) {
  const arrStr = str.trim().split('\n')
  const nStr = arrStr.map(e => e.replace(/^(\s*).+?$/, '$1').length).filter(e => e > 0)
  const cStr = nStr.length > 0 ? Math.min(...nStr) : null
  if (cStr) str = arrStr.map(e => e.replace(' '.repeat(cStr), '')).join('\n')
  return str
}
