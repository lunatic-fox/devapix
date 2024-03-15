import literalStringTab from '@/app/functions/literalStringTab'
import styles from './index.module.css'
import { Sometype_Mono } from 'next/font/google'
import hljs from 'highlight.js'

const sometypeMono = Sometype_Mono({ subsets: ['latin'] })

function icons(str: string) {
  return str
    .replace(/(#[a-f0-9]{3,8})\[(.+?)\]/gi, '<span style="color: $1">$2</span>')
    .replace(/@\[([a-z0-9]+?)\]/g, `<img width="16" src="/img/icon/$1.svg"/>`)
}

/** @param h Language highlight */
export default function Code({ c, ic, h }: { c?: string, ic?: string, h?: string }) {
  ic = ic?.replace(/</g, '&lt;').replace(/>/g, '&gt;')

  if (c)
    c = literalStringTab(c)

  if (c && h)
    c = hljs.highlight(c, { language: h }).value

  return (
    h && c ?
      <section className={styles.highlightWrapper}>
        <code
          className={`${styles.highlightCode} ${sometypeMono.className}`}
          dangerouslySetInnerHTML={{ __html: icons(c) }}></code>
      </section>
    : c ?
      <code
        className={`${styles.code} ${sometypeMono.className}`}
        dangerouslySetInnerHTML={{
          __html: icons(c)
            .split('\n')
            .map(e => `<span>${e}</span>`)
            .filter(e => e)
            .join('')
            .replace(/<span><\/span>/g, '')
        }}></code>
    : ic ?
      <code
        className={`${styles.inlineCode} ${sometypeMono.className}`}
        dangerouslySetInnerHTML={{
          __html: icons(ic.split('\n')
            .map(e => e.trim())
            .join(''))
        }}></code>
    : ''
  )
}
