import { CSSColorList } from 'kolorz/src/css-color-list/css-color-list'
import { RequestObject } from '../types'
import kolorz from 'kolorz'

export default function requestObject(q: URLSearchParams) {
  const resObject: RequestObject = {}

  Object.entries(Object.fromEntries(q.entries())).forEach(([k, v]) => {
    // Icon
    if (v === '' && k.match(/^(dot-net|[a-z0-9.]+)$/i))
      resObject.i = k

    if (k.match(/^r|release$/) && v.match(/^(dev|develop|\d+(\.\d+){1,2})$/))
      resObject.r = v.match('dev') ? 'develop' : v

    if (k.match(/^tag$/) && v.match(/^.+$/))
      resObject.tag = v

    // Version
    if (k.match(/^v(ersion)?$/) && v.match(/^(o(riginal)?|p(lain)?|l(ine)?)(w|-wordmark)?$/)) {
      const fullName = (v.match(/-/) ? v.split('-'): v.split('')).map(e => e[0])
      resObject.v = fullName.length === 2 ? fullName.join('') : v[0]
    }

    // Color
    if (k.match(/^c(olor)?$/i)) {
      // CSS
      if (v.match(/^[a-z]+$/))
        resObject.c = kolorz.css(v as CSSColorList).toHex

      // Hexadecimal
      if (v.match(/^([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})$/))
        resObject.c = `#${v}`
    }

    // Theme
    if (k.match(/^t(heme)?$/) && v.match(/^(d(ark)?|l(ight)?)$/))
      resObject.t = v[0]

    // Size
    if (k.match(/^s(ize)?$/) && v.match(/^\d+$/))
      resObject.s = +v
  })
  
  return resObject
}
