'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useId, useState } from 'react'
import styles from './index.module.css'

const DOCS_PATH = '/docs/pages/'
export default function Docs({ children, refs }: {
  children: React.ReactNode
  refs: {
    currentDoc: string
    previousDoc?: { link: string, label: string }
    nextDoc?: { link: string, label: string }
  }
}) {
  const sidebarId = useId()
  const [headerOptions, setHeaderOptions] = useState(false)
  const handleHeaderOptions = (ev: React.MouseEvent) => {
    setHeaderOptions(!headerOptions)
    const sidebarElement = document.getElementById(sidebarId) as HTMLElement
    sidebarElement.style.display = headerOptions ? 'none' : 'block'
  }

  const highlight = (href: string) => `${DOCS_PATH}${refs.currentDoc}` === href ? styles.sidebarOn : ''
  const rmHyphen = (str: string) => str.split('-').map(e => `${e[0].toUpperCase()}${e.slice(1)}`).join(' ')

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href='/' className={styles.headerLogo} >
          <Image
            src='/img/logo.svg'
            width={32}
            height={32}
            alt='Devapix logo'
            priority={true} />
        </Link>
        <section className={styles.headerDescription}>Docs</section>
        <section
          className={styles.headerOptionsWrapper}
          onClick={ev => handleHeaderOptions(ev)}>
          {
            headerOptions ?
              <Image
                src='/img/icon/close.svg'
                width={24}
                height={24}
                alt='Options'
                priority={true} />
              :
              <Image
                src='/img/icon/options.svg'
                width={24}
                height={24}
                alt='Close'
                priority={true} />
          }
        </section>
      </header>
      <section className={styles.bigWrapper}>
        <aside id={sidebarId} className={styles.sidebar}>
          <div className={styles.sidebarInfo}>
            <Link href='/docs/pages/introduction'>
              <section className={highlight('/docs/pages/introduction')}>Introduction</section>
            </Link>
            <details open={
              refs.currentDoc.match(RegExp('^getting-icons')) ? true : false
            }>
              <summary>Getting icons</summary>
              {
                [
                  'icon',
                  'project-version',
                  'version',
                  'size',
                  'color',
                  'theme'
                ].map((e, i) => {
                  const href = `/docs/pages/getting-icons/${e}`
                  return (
                    <Link key={i} href={href}>
                      <section className={highlight(href)}>{rmHyphen(e)}</section>
                    </Link>
                  )
                })
              }
            </details>

            <details open={
              refs.currentDoc.match(RegExp('^getting-info')) ? true : false
            }>
              <summary>Getting info</summary>
              {
                [
                  'icon',
                  'tag'
                ].map((e, i) => {
                  const href = `/docs/pages/getting-info/${e}`
                  return (
                    <Link key={i} href={href}>
                      <section className={highlight(href)}>{rmHyphen(e)}</section>
                    </Link>
                  )
                })
              }
            </details>

            <details open={
              refs.currentDoc.match(RegExp('^ways-of-use')) ? true : false
            }>
              <summary>Ways of use</summary>
              {
                [
                  '<img>',
                  'Next.js <Image>',
                  'devicon.js',
                  '@devapix/react'
                ].map((e, i) => {
                  const href = `/docs/pages/ways-of-use/${e.replace(/[<>.@/-]/g, '')
                      .replace(/\s/g, '-')
                      .toLowerCase()
                    }`
                  return (
                    <Link key={i} href={href}>
                      <section className={highlight(href)}>{e}</section>
                    </Link>
                  )
                })
              }
            </details>
            <Link href='/docs/pages/credits'>
              <section className={highlight('/docs/pages/credits')}>Credits</section>
            </Link>
          </div>
        </aside>
        <section className={styles.articleWrapper}>
          <article className={styles.article}>{children}</article>
          <section className={styles.pages}>
            {
              refs.previousDoc ?
                <Link href={`${DOCS_PATH}${refs.previousDoc.link}`}>
                  <button>
                    <Image
                      src='/img/icon/left.svg'
                      width={12}
                      height={12}
                      alt='Left'
                      priority={true} />
                    {refs.previousDoc.label}
                  </button>
                </Link>
                : <section></section>
            }
            {
              refs.nextDoc ?
                <Link href={`${DOCS_PATH}${refs.nextDoc.link}`}>
                  <button>
                    {refs.nextDoc.label}
                    <Image
                      src='/img/icon/right.svg'
                      width={12}
                      height={12}
                      alt='Right'
                      priority={true} />
                  </button>
                </Link>
                : <section></section>
            }
          </section>
        </section>
      </section>
    </main>
  )
}
