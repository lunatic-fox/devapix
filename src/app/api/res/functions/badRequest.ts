const badRequest: { [k: string]: string } = {
  noIcon: `
  Problem: 
    Request input has no 'icon-name'.
  
  Context:
    This request has 'icon-name' as a mandatory implicity
    property.

  Fixes:
    Try again using the following patterns:
      /api/[icon name]       -> Get SVG icon
      /api/info/[icon name]  -> Get icon info

    Examples:
      /api/csharp       -> Get SVG 'csharp' icon,
      /api/info/csharp  -> Get 'csharp' icon info`,

  wrongWay: `
  Problem: 
    API wrong path request.

  Context:
    This request does not return an icon, instead it returns
    a list of icon names that have the searched tag.
           
  Fix:
    Try again using the following pattern:
      /api/info/tag:[search tag]
    
    Examples:
      /api/info/tag:programming  -> Get icon names that have
                                    'programming' tag in
                                    their tags.`
}

Object.entries(badRequest).forEach(([k, v]) => {
  let tabs: number[] = []
  let vSplit = v.split('\n')

  vSplit.forEach(e => tabs.push(e.replace(/^([ ]+?)[^ ].+?$/, '$1').length))
  tabs = tabs.filter(e => e > 0)

  badRequest[k] = vSplit.map((e, i) => {
    if (!e && i === 0) return null
    if (e.match(/^\s*?$/)) return ' '
    return e.replace(' '.repeat(Math.min(...tabs)), '')
  }).filter(e => e).join('\n')
})

export default badRequest
