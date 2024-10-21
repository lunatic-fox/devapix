'use client'
import literalStringTab from '@/functions/literalStringTab'
import styles from './index.module.css'
import hljs from 'highlight.js'
import { useEffect } from 'react'
import 'highlight.js/styles/tokyo-night-dark.css'

function icons(str: string) {
  return str
    .replace(/(^GET\s)(.+)/gm, '<span style="color: lime;font-weight: 700">$1</span>$2')
    .replace(/{(.+?)}/g, '<span style="color: #ffd900">{$1}</span>')
    .replace(/(#[a-f0-9]{3,8})\[(.+?)\]/gi, '<span style="color: $1">$2</span>')
    .replace(/@\[([a-z0-9]+?)\]/g, `<img width="16" src="/img/icon/$1.svg"/>`)
}

export default function Code({ c, sf, ic, h, style }: {
  /** Code string */
  c?: string
  /** Skip formatting */
  sf?: boolean
  /** Inline code string */
  ic?: string
  /** Highlight format */
  h?: string
  /** Inline style object */
  style?: React.CSSProperties
}) {
  ic = ic?.replace(/</g, '&lt;').replace(/>/g, '&gt;')

  if (c && !sf)
    c = literalStringTab(c)

  if (c && h)
    c = hljs.highlight(c, { language: h }).value

  useEffect(() => {
    [...document.getElementsByClassName(styles.code)].forEach(e => {
      const wrapperWidth = e.clientWidth
      const textWidth = Math.max(...(e.textContent ?? '').split('\n').map(f => (f.length * 9.28) + 20))

      if (textWidth > wrapperWidth)
        (e as HTMLElement).style.overflowX = 'scroll'
    })
  }, [])

  const handleCopy = (ev: React.MouseEvent) => {
    const mainNode = ev.currentTarget as HTMLElement
    mainNode.style.position = 'relative'
    navigator.clipboard.writeText(mainNode.textContent ?? '')

    const copied = document.createElement('section')
    copied.className = styles.copied
    copied.textContent = 'Copied to clipboard!'
    mainNode.append(copied)
    setTimeout(() => mainNode.removeChild(copied), 1e3)
  }

  return (
    h && c ?
      <section className={styles.highlightWrapper}>
        <code
          onDoubleClick={(ev) => handleCopy(ev)}
          className={`${styles.code} ${styles.highlightCode}`}
          style={style ? style : {}}
          dangerouslySetInnerHTML={{ __html: icons(c) }}></code>
        <h6>Double click to copy</h6>
      </section>
      : c ?
        <section>
          <code
            onDoubleClick={(ev) => handleCopy(ev)}
            className={c.match(/^GET.+/) ? `${styles.code} ${styles.codeGet}`: styles.code }
            style={style ? style : {}}
            dangerouslySetInnerHTML={{
              __html: icons(c)
                .split('\n')
                .map(e => `<span>${e}</span>`)
                .filter(e => e)
                .join('')
                .replace(/<span><\/span>/g, '')
            }}></code>
          <h6>Double click to copy</h6>
        </section>
        : ic ?
          <code
            className={styles.inlineCode}
            dangerouslySetInnerHTML={{
              __html: icons(ic.split('\n')
                .map(e => e.trim())
                .join(''))
            }}></code>
          : ''
  )
}
