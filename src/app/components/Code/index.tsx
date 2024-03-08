import literalStringTab from '@/app/functions/literalStringTab'
import styles from './index.module.css'
import { Sometype_Mono } from 'next/font/google'
const sometypeMono = Sometype_Mono({ subsets: ['latin'] })


function icons(str: string) {
  return str
    .replace(/(#[a-f0-9]{3,8})\[(.+?)\]/gi, '<span style="color: $1">$2</span>')
    .replace(/@\[([a-z0-9]+?)\]/g, `<img width="16" src="/img/icon/$1.svg"/>`)
}

/**
* @param h Language highlight */
export default function Code({ c, ic, h }: { c?: string, ic?: string, h?: string }) {
  if (c) c = literalStringTab(c)

  if (c && h) {
    switch (h) {
      case 'json':
        c = c.replace(/^(\s*?".+?"):/gm, '<span style="color: #9cdcfe">$1</span><span>:</span>')
          .replace(/(<span>:<\/span>)(\s?".*?")/gm, '$1<span style="color: #ce9177">$2</span>')
          .replace(/(<span>:<\/span>)(\s?\d+)/gm, '$1<span style="color: #b5cea8">$2</span>')
          .replace(/(<span>:<\/span>)(\s?(true|false|null))/gm, '$1<span style="color: #569cd6">$2</span>')
          .replace(/^(\s*?".+?")(,?)/gm, '<span style="color: #ce9178">$1</span><span>$2</span>')
          .replace(/^(?!<span>)(.+)/gm, '<span>$1</span>')
          .replace(/<span><\/span>/g, '')
          .replace(/(.+<\/span>)(.+?<\/span>)$/gm, '$1<span>$2')
          .replace(/^<span><span/gm, '<span')
          .replace(/<span><span>/g, '<span>')
          .replace(/<\/span><\/span>/g, '</span>')
        break
    }
  }

  return (
    h && c ? <code
      className={`${styles.highlightCode} ${sometypeMono.className}`}
      dangerouslySetInnerHTML={{ __html: icons(c) }}></code>
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
          }}
        ></code>
        : ic ?
          <code
            className={`${styles.inlineCode} ${sometypeMono.className}`}
            dangerouslySetInnerHTML={{
              __html: icons(ic.split('\n')
                .map(e => e.trim())
                .join(''))
            }}
          ></code>
          : ''
  )
}
