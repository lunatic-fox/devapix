import Code from '@/app/components/Code'
import styles from './index.module.css'
import Image from 'next/image'
import { useEffect, useId, useState } from 'react'

/** Generic key string object */
type GKSObj = { [k: string]: string }
type RequestObject = {
  i?: string
  pv?: string
  v?: string
  c?: string
  s?: string
  t?: boolean
}

export default function Preview({ inputsIds }: { inputsIds: GKSObj }) {
  const [lcid, dcid, wcid, bcid, cpid] = Array.from(Array(5), _ => useId())

  const [req, setReq] = useState({} as RequestObject)
  const [themed, setThemed] = useState(false)
  const [bgTheme, setBgTheme] = useState('dchess')
  const reqObj: RequestObject = {}

  useEffect(() => {
    const [
      icon,
      projectVersion,
      version,
      color,
      theme,
      size,
      submitBtn
    ] = [...Object.values(inputsIds)].map(id => document.getElementById(id) as HTMLInputElement)

    theme.onclick = () => {
      setThemed(!themed)
      setBgTheme(!themed ? 'linear-gradient(-45deg, #fff 50%, #000 50%)' : 'dchess')
      theme.style.background = themed ? '#282c34' : '#b053df'
    }

    submitBtn.onclick = () => {
      reqObj.i = icon.value
      reqObj.pv = projectVersion.value
      reqObj.v = version.value
      reqObj.c = color.value.replace('#', '')
      reqObj.t = themed
      reqObj.s = size.value
      Object.entries(reqObj).forEach(([k, v]) =>
        !v && delete (reqObj as GKSObj)[k]
      )
      setReq(reqObj)
    }
  }, [req, themed])



  useEffect(() => {
    const [lc, dc, wc, bc, cp] = [lcid, dcid, wcid, bcid, cpid].map(id => document.getElementById(id) as HTMLInputElement)

    lc.onclick = () => setBgTheme('lchess')
    dc.onclick = () => setBgTheme('dchess')
    wc.onclick = () => setBgTheme('#ffffff')
    bc.onclick = () => setBgTheme('#000000')
    cp.oninput = () => setBgTheme(cp.value)
  }, [bgTheme])

  const aURI = `${req.i ?? ''}${Object.entries(req).map(([k, v]) => !k.match(/^(i|t)$/) ? `&${k}=${v}` : null).join('')
    }`


  return (
    <section className={styles.previewBigWrapper}>
      <h2>Preview</h2>
      <div className={styles.previewWrapper}>
        <section className={styles.chessOptWrapper}>
          <input
            type='button'
            id={lcid}
            className={styles.lChessBtn}
            autoComplete='off'
            spellCheck={false} />
          <input
            type='button'
            id={dcid}
            className={styles.dChessBtn}
            autoComplete='off'
            spellCheck={false} />
          <input
            type='button'
            id={wcid}
            className={styles.wChessBtn}
            autoComplete='off'
            spellCheck={false} />
          <input
            type='button'
            id={bcid}
            className={styles.bChessBtn}
            autoComplete='off'
            spellCheck={false} />
          <section className={styles.cChessBtn}>
            <label htmlFor={cpid} className={styles.mask}></label>
            <input type="color" name='chess' id={cpid} />
          </section>
        </section>
        <section
          className={`${styles.preview} ${bgTheme.match(/^(l|d)chess$/) ? styles[bgTheme] : ''}`}
          style={bgTheme.match(/^#[a-f0-9]{6}|linear.+/) ? { background: bgTheme } : {}}>
          {
            req.i ?
              req.t ?
                <section className={styles.themedWrapper}>
                  <div className={styles.themedLight} style={{
                    backgroundImage: `url(https://devapix.vercel.app/api?${aURI}&t=l)`
                  }}></div>
                  <div className={styles.themedDark} style={{
                    backgroundImage: `url(https://devapix.vercel.app/api?${aURI}&t=d)`
                  }}></div>
                </section>
                : <Image
                  src={`https://devapix.vercel.app/api?${req.i}${['pv', 'v', 'c', 's'].map(k => {
                    const r = req as GKSObj
                    return r[k] && `&${k}=${r[k].replace('#', '')}`
                  }).join('')
                    }`}
                  width={128}
                  height={128}
                  alt='preview'
                  priority={true} />
              : <section style={{
                width: 128,
                height: 128
              }}></section>
          }
        </section>
      </div>
      {
        req.i ?
          <div className={styles.codesWrapper}>
            <h2>Codes</h2>
            {
              req.t ?
                <div>
                  <h4>Links</h4>
                  <Code c={`
                    https://devapix.vercel.app/api?${aURI}&t=d
                    https://devapix.vercel.app/api?${aURI}&t=l
                  `} />
                </div>
                : <div>
                  <h4>Link</h4>
                  <Code c={`https://devapix.vercel.app/api?${aURI}`} />
                </div>
            }
            {
              !req.t ?
                <div>
                  <h4>Markdown</h4>
                  <Code
                    h='markdown'
                    c={`![${req.i ?? ''}](https://devapix.vercel.app/api?${aURI})`} />
                  <h4>HTML</h4>
                  <Code
                    h='html'
                    c={`
                      <img
                        src="https://devapix.vercel.app/api?${aURI}"
                        title"${req.i ?? ''}"
                        alt="${req.i ?? ''}"/>
                    `} />
                </div>
                : ''
            }
            {
              req.t ?
                <div>
                  <h4>Markdown and HTML</h4>
                  <Code
                    h='html'
                    c={`
                    <picture>
                      <source
                        media="(prefers-color-scheme: dark)"
                        srcset="https://devapix.vercel.app/api?${aURI}&t=d"/>
                      <img
                        alt="${req.i ?? ''}"
                        title="${req.i ?? ''}"
                        src="https://devapix.vercel.app/api?${aURI}&t=l"/>
                    </picture>`} />
                </div>
                : ''
            }
          </div>
          : ''
      }
    </section>
  )
}
