const indexProto: { [k: string]: null | string[] } = {
  introduction: null,
  gettingIcons: [
    'Icon',
    'Release',
    'Version',
    'Size',
    'Color',
    'Theme',
    'More examples'
  ],
  gettingInfo: [
    'Icon',
    'Tag'
  ],
  waysOfUse: [
    '<img>',
    'Next.js <Image>',
    'devicon.js',
    '@devapix/react'
  ],
  credits: null
}

const DOCS_INDEX: {
  [k: string]: { path: string, label: string }
} = Object.fromEntries(
  Object.keys(indexProto).map(k => {
    const prefix = '/docs/pages'
    if (indexProto[k]) {
      const tl = k.replace(/([A-Z])/g, ' $1')
      return (indexProto[k] as string[]).map(k2 => [
        `${k}${k2}`.replace(/[^a-z]/gi, '').toLowerCase(),
        {
          path: `${prefix}/${k}/${k2.replace(/[^a-z]/gi, '')}`.toLowerCase(),
          label: `${tl[0].toUpperCase()}${tl.slice(1).toLowerCase()}: ${k2}`
        }
      ])
    }
    return [[
      k.replace(/[^a-z]/gi, '').toLowerCase(),
      {
        path: `${prefix}/${k}`.toLowerCase(),
        label: `${k[0].toUpperCase()}${k.slice(1)}`
      }
    ]]
  }).flat()
)

export default DOCS_INDEX
