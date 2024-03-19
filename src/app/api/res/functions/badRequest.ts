const badRequest: { [k: string]: string } = {
  noIcon: `
  Problem: 
    Request has no 'ICON_NAME'.
  
  Context:
    This request has "icon" (ICON_NAME) as a mandatory implicity
    property.

  Fixes:
    Please try again using one of the following patterns:
      /api?[ICON_NAME]       -> Get SVG icon.
      /api/info?[ICON_NAME]  -> Get icon info.

    Examples:
      /api?csharp       -> Get SVG 'csharp' icon.
      /api/info?csharp  -> Get 'csharp' icon info.
      
  Documentation:
    https://devapix.vercel.app/docs/introduction`,

  wrongWay: `
  Problem: 
    Wrong path request.

  Context:
    "tag" is not a property of this request query ("/api?"), 
    however it is a valid property of "/api/info?" request,
    which returns a list of technology names that have the
    searched "tag" inside their "tags" array from 
    "devicon.json".
           
  Fix:
    Please try again using the following pattern:
      /api/info?tag=[SEARCH_TAG]
    
    Examples:
      /api/info?tag=programming  -> Get icon names that have
                                    'programming' tag in
                                    their tags.
  Documentation:
    https://devapix.vercel.app/docs/getting-info/tag`
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
