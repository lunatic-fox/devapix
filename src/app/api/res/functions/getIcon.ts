import path from 'path'
import { promises as fs } from 'fs'

import { optimize } from 'svgo'
import { DJson, DeviconFiles, RequestObject } from '../types'
import badRequest from './badRequest'
import getProjectVersions from '@/functions/getProjectVersions'

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
  let icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M128 2.475c-32.15 0-64.36 12.265-88.82 36.724-48.919 48.919-48.915 128.72.004 177.639 48.918 48.918 128.716 48.918 177.634 0 48.919-48.918 48.919-128.719 0-177.637C192.36 14.742 160.15 2.475 128 2.475zm0 34.832c17.658 0 35.29 5.15 50.545 15.447L52.732 178.564C28.906 143.28 32.58 95.244 63.902 63.92 81.682 46.14 104.816 37.306 128 37.307zm75.27 40.166c23.828 35.284 20.154 83.32-11.17 114.644-31.325 31.325-79.36 35-114.645 11.17L203.27 77.473z"/></svg>`

  if (!req.i && !req.tag)
    return {
      svg: icon,
      info: badRequest.noIcon,
    }


  let url = BASE_URL
  if (req.pv) url = `${BASE_URL}@${req.pv}`

  /** Devicon Files */
  const dFiles: DeviconFiles = {}

  /** Devicon JSON get */
  let dJGet: DJson | null = {} as DJson

  const dJson = await fetch(`${url}/devicon.json`)

  if (dJson.status === 200) {
    dFiles.json = await dJson.json()

    if (req.i) {
      req.i = req.i.toLowerCase()
      const sName = dFiles.json?.find(e => e.name === req.i) ?? null
      const sAltname = dFiles.json?.filter(e => e.altnames?.map(f => f.replace(/\s/g, '').toLowerCase()).includes(req.i as string))[0] ?? null
      dJGet = sName ? sName : sAltname ? sAltname : null
    }

    if (req.tag) {
      return {
        info: JSON.stringify({
          tag: req.tag,
          icons: dFiles.json?.filter(e => e.tags.some(f => f.replace(/\s|-/g, '').toLowerCase() === req.tag)).map(e => e.name)
        }, null, 2),
        svg: icon
      }
    }

    if (dJGet?.versions && dJGet.aliases) {
      req.i = dJGet.name

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
        icon = await (await fetch(`${url}/icons/${req.i}/${req.i}-${ICON_VERSIONS[req.v]}.svg`)).text()
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

    const pvs = await fs.readFile(path.join(process.cwd(), 'src/app/interface/data/releases.json'), 'utf8')

    const infoObject = {
      project: {
        version: req.pv ? req.pv : 'latest',
        releases: req.i ? JSON.parse(pvs)[req.i] : null,
        altnames: dJGet?.altnames,
        iconVersions: dJGet?.vFlat ? dJGet.vFlat.map(e => ICON_VERSIONS[e]) : null,
        tags: dJGet?.tags
      } as {
        version: string
        releases: string[]
        altnames: string[]
        iconVersions: string[]
        tags: string[]
        color?: string
      },
      request: {
        name: req.i,
        version: req.v && ICON_VERSIONS[req.v]
      } as {
        name: string
        version: string
        color?: string
        theme?: string
        size?: number
      }
    }

    infoObject.project.color = dJGet?.color && dJGet.color
    infoObject.request.color = req.c && req.c
    infoObject.request.theme = req.t && THEMES[req.t]
    infoObject.request.size = req.s && req.s

    return {
      info: JSON.stringify(infoObject, null, 2),
      svg: icon
    }
  }

  return {
    info: JSON.stringify({
      project: {
        iconVersions: null
      }
    }, null, 2),
    svg: icon
  }
}
