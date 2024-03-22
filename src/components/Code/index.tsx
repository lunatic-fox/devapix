'use client'

import literalStringTab from '@/functions/literalStringTab'
import styles from './index.module.css'
import { Sometype_Mono } from 'next/font/google'
import hljs from 'highlight.js'
import { useEffect, useState } from 'react'



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

  useEffect(() => {
    [
      ...document.getElementsByClassName(styles.code),
      ...document.getElementsByClassName(styles.highlightCode)
    ].forEach(e => {
      const wrapper = e.clientWidth
      const codeWidth = Math.max(
        ...[...e.childNodes].map(f => f.textContent?.split('\n'))
        .flat()
        .map(f => ((f?.length ?? 0) * 9.28) + 20)
      )
      if (codeWidth > wrapper)
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
          className={`${styles.highlightCode} ${sometypeMono.className}`}
          dangerouslySetInnerHTML={{ __html: icons(c) }}></code>
        <h6>Double click to copy</h6>
      </section>
    : c ?
      <section>
        <code
          onDoubleClick={(ev) => handleCopy(ev)}
          className={`${styles.code} ${sometypeMono.className}`}
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
        className={`${styles.inlineCode} ${sometypeMono.className}`}
        dangerouslySetInnerHTML={{
          __html: icons(ic.split('\n')
            .map(e => e.trim())
            .join(''))
        }}></code>
    : ''
  )
}
