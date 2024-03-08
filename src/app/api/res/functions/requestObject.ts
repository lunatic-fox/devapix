import { CSSColorList } from 'kolorz/src/css-color-list/css-color-list'
import { RequestObject } from '../types'
import kolorz from 'kolorz'

export default function requestObject(q: string) {
  const resObject: RequestObject = {}
  const shorthand = q.split(',')

  shorthand.forEach(p => {
    p = p.replace(/\s|'|\+/g, '')

    // Icon
    if (p.match(/^(dot-net|[a-z0-9.]+)$/i)) resObject.i = p

    // Icon and project version
    if (p.match(/^[a-z0-9]+@(\d+|(\d+\.){1,2}\d+)$/i))
      [resObject.i, resObject.pv] = p.split('@')

    const pSplit = p.split(':')
    if (pSplit.length === 2) {
      const ps = pSplit[1]

      // Search tag
      if (p.match(/^tag:.+?$/)) resObject.tag = ps

      // Icon version
      if (p.match(/^v(ersion)?:(o(riginal)?|p(lain)?|l(ine)?)(w|-wordmark)?$/))
        resObject.v = ps.match(/^(original|plain|line)(-wordmark)?$/) ?
          ps.split('-').map(e => e[0]).join('')
          : ps

      // Icon CSS color
      if (p.match(/^c(olor)?:[a-z]+$/i))
        resObject.c = kolorz.css(ps as CSSColorList).toHex
    
      // Icon color
      if (p.match(/^c(olor)?:([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})$/i))
        resObject.c = `#${ps}`
    
      // Icon theme
      if (p.match(/^t(heme)?:(d(ark)?|l(ight)?)$/))
        resObject.t = ps.match(/^dark|light$/) ? ps[0] : ps

      // Icon size
      if (p.match(/^s(ize)?:\d+$/))
        resObject.s = +ps
    }
  })

  if (resObject.c && resObject.t) delete resObject.c
  return resObject
}
