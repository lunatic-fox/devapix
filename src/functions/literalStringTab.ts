export default function literalStringTab(str: string) {
  const arrStr = str.trim().split('\n')

  
  const nStr = arrStr.map(e => e.replace(/^(\s*).+?$/, '$1').length).filter(e => e > 0)
  let cStr = nStr.length > 0 ? Math.min(...nStr) : null

  if (nStr.every(e => e === cStr) && cStr && nStr.length > 1) 
    cStr -= 2
  
  if (cStr) 
    str = arrStr.map(e => e.replace(' '.repeat(cStr ?? 0), '')).join('\n')
  return str
}
