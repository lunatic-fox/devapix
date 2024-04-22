const fs = require('fs')
const releasesFile = JSON.parse(fs.readFileSync('./res/releases.json', 'utf8'))
const releases = [...new Set(Object.values(releasesFile).flat())]
const baseURL = './npm/react'

const lastestRelease = releases.map(e => e.split('.').map(f => +f < 10 ? `0${f}` : f).join(''))
  .sort()
  .pop()
  .split(/(\d{2})/)
  .filter(e => e)
  .map(e => +e)
  .join('.')

fs.writeFileSync(`${baseURL}/index.jsx`, `export * from './${lastestRelease}'`)

releases.forEach(r => {
  const releaseURL = `${baseURL}/${r}`
  if (!fs.existsSync(releaseURL)) fs.mkdirSync(releaseURL)

  const icons = Object.keys(releasesFile).filter(k => releasesFile[k].includes(r))
    .map(e => ({
      fnName: `Devicon${e[0].toUpperCase()}${e.slice(1)}`.replace(/-/g, ''),
      iconName: e
    }))

  const jsxFile = `import Devicon from '../devicon'\n${
    icons.map(e => [
      `export const ${e.fnName} = p => <Devicon icon='${e.iconName}' release='${r}' {...p}/>`
    ].join('\n')).join('\n')
  }\n`
  fs.writeFileSync(`${releaseURL}/index.jsx`, jsxFile)

  const dtsFile = `import PartialProps from '../types'\n${
    icons.map(e => [
      `export function ${e.fnName}(p: PartialProps): React.JSX.Element`
    ].join('\n')).join('\n')
  }\n`
  fs.writeFileSync(`${releaseURL}/index.d.ts`, dtsFile)
})

