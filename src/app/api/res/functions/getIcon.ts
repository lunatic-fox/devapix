import path from 'path'
import { promises as fs } from 'fs'
import { optimize } from 'svgo'
import { DJson, DeviconFiles, RequestObject } from '../types'
import badRequest from './badRequest'

const BASE_URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon'
const DEFAULT_ICON_SIZE = 128
const ICON_VERSIONS: { [k: string]: string } = {
  o: 'original',
  p: 'plain',
  l: 'line',
  ow: 'original-wordmark',
  pw: 'plain-wordmark',
  lw: 'line-wordmark'
}
const THEMES: { [k: string]: string } = { d: 'dark', l: 'light' }

export default async function getIcon(req: RequestObject) {
  /** Response icon */
  let icon = await fs.readFile(path.join(process.cwd(), 'src/app/api/res/img/not-found.svg'), 'utf8')

  if (!req.i && !req.tag)
    return {
      svg: icon,
      info: badRequest.noIcon,
    }

  let url = BASE_URL
  if (req.r) url = `${BASE_URL}@${req.r}`

  /** Devicon Files */
  const dFiles: DeviconFiles = {}

  /** Devicon JSON get */
  let dJGet: DJson | null = {} as DJson

  const dJson = await fetch(`${url}/devicon.json`)

  if (dJson.status === 200) {
    dFiles.json = await dJson.json()
    if (dFiles.json) {
      if (req.i) {
        req.i = req.i.toLowerCase()
        const fName = dFiles.json.find(e => e.name === req.i)
        const fAltname = dFiles.json.find(e => e.altnames?.map(f => f.replace(/\s/g, '').toLowerCase()).includes(req.i as string))
        dJGet = fName ? fName : fAltname ? fAltname : null
      }

      if (req.tag) {
        return {
          info: JSON.stringify({
            tag: req.tag,
            icons: dFiles.json.filter(e =>
              e.tags.some(f => f.replace(/\s|-/g, '')
                .toLowerCase() === req.tag))
              .map(e => e.name)
          }, null, 2),
          svg: icon
        }
      }
    }

    if (dJGet?.versions && dJGet.aliases) {
      const iconName = dJGet.name
      const versionPriority = Object.keys(ICON_VERSIONS)

      dJGet.versions.svg = dJGet.versions.svg.map(e => e.split('-').map(f => f[0]).join(''))
        .sort((a, b) => versionPriority.indexOf(a) - versionPriority.indexOf(b))
      dJGet.versions.font = dJGet.versions.font.map(e => e.split('-').map(f => f[0]).join(''))
        .sort((a, b) => versionPriority.indexOf(a) - versionPriority.indexOf(b))

      if (!req.v)
        req.v = dJGet.versions.svg[0]

      dJGet.versions.font.forEach((e, i) => {
        if (dJGet)
          if (!dJGet.versions.svg.includes(e))
            dJGet.versions.font[i] = ''
      })
      dJGet.versions.font = dJGet.versions.font.filter(e => e)

      dJGet.vFlat = [...new Set([dJGet.versions.svg, dJGet.versions.font].flat())]

      if (!dJGet.vFlat.includes(req.v))
        req.v = dJGet.vFlat[0]

      if (req.c || req.t)
        if (req.v.match(/ow?/) && !dJGet.versions.font.includes(req.v))
          req.v = req.v.replace('o', 'p')

      if (dJGet.aliases && dJGet.aliases.length > 0) {
        dJGet.aliases.map(e => (
          e.base = e.base.split('-').map(f => f[0]).join(''),
          e.alias = e.alias.split('-').map(f => f[0]).join('')
        ))

        const alias = dJGet.aliases.filter(e => e.alias === req.v)
        if (alias.length > 0) req.v = alias[0].base
      }

      if (dJGet.vFlat.filter(e => e === req.v).length > 0)
        icon = await (await fetch(`${url}/icons/${iconName}/${iconName}-${ICON_VERSIONS[req.v]}.svg`)).text()
    }

    icon = optimize(icon, {
      multipass: true,
      plugins: [
        'removeDimensions',
        'convertStyleToAttrs',
        {
          name: 'convertShapeToPath',
          params: {
            convertArcs: true,
            floatPrecision: 2
          }
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: 'class'
          }
        }
      ]
    }).data

    const paint = (color: string) => {
      icon = icon.replace(/fill=".+?"/g, '')
        .replace(/\s+/g, ' ')
        .replace(/(<path)/g, `$1 fill="${color}"`)
    }

    if (!icon.match(/fill=".+?"/g))
      paint(dJGet?.color as string)

    if (req.c)
      paint(req.c)

    if (req.t && req.t.match(/d|l/))
      paint(req.t === 'd' ? '#fff' : '#000')

    icon = req.s ? icon.replace(/(viewBox=".+?")/, `$1 width="${req.s}" height="${req.s}"`)
      : icon.replace(/(viewBox=".+?")/, `$1 width="${DEFAULT_ICON_SIZE}" height="${DEFAULT_ICON_SIZE}"`)

    const pvs = await fs.readFile(path.join(process.cwd(), 'res/releases.json'), 'utf8')

    const infoObject = {
      request: { name: req.i },
      project: {
        name: dJGet?.name,
        altnames: dJGet?.altnames,
        tags: dJGet?.tags
      }
    } as {
      request: {
        name: string
        release?: string
        version?: string
        color?: string
        theme?: string
        size?: number
      }
      project: {
        name: string
        altnames: string[]
        releases?: string[]
        versions?: string[]
        tags: string[]
        color?: string
      }
    }

    if (dJGet?.name) {
      const [r, p] = [infoObject.request, infoObject.project]
      r.release = req.r ? req.r : 'latest'
      r.version = req.v && ICON_VERSIONS[req.v]
      r.color = req.c && req.c
      r.theme = req.t && THEMES[req.t]
      r.size = req.s && req.s
      p.color = dJGet.color
      p.releases = JSON.parse(pvs)[dJGet.name]
      p.versions = dJGet.vFlat.map(e => ICON_VERSIONS[e])
    }

    return {
      info: JSON.stringify(infoObject, null, 2),
      svg: icon
    }
  }

  return {
    info: JSON.stringify({
      request: {
        name: req.i,
        release: req.r,
        version: req.v,
        color: req.c,
        theme: req.t,
        size: req.s
      },
      project: {}
    }, null, 2),
    svg: icon
  }
}
