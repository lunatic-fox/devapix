'use client'
import styles from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useId, useState } from 'react'

export default function Docs({ children, refs }: {
  children: React.ReactNode
  refs: {
    currentDocHref: string
    previousDocHref?: string
    nextDocHref?: string
  }
}) {
  const sidebarId = useId()
  const [headerOptions, setHeaderOptions] = useState(false)
  const handleHeaderOptions = (ev: React.MouseEvent) => {
    setHeaderOptions(!headerOptions)
    const sidebarElement = document.getElementById(sidebarId) as HTMLElement
    if (headerOptions) {
      sidebarElement.style.display = 'none'
    } else {
      sidebarElement.style.display = 'block'
    }
  }

  const [previousDoc, nextDoc] = [
    refs.previousDocHref,
    refs.nextDocHref
  ].map(e => e?.split('/').slice(-2).map(f => f.split('-').map(g => `${g[0].toUpperCase()}${g.slice(1)}`).join(' ')).join(': '))

  const hightlight = (href: string) => refs.currentDocHref === href ? styles.sidebarOn : ''
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
            priority={true}/>
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
          <Link href='/docs/introduction'>
            <section className={hightlight('/docs/introduction')}>Introduction</section>
          </Link>
          <details open={
            refs.currentDocHref.match(RegExp('^/docs/getting-icons')) ? true : false
          }>
            <summary>Getting Icons</summary>
            {
              [
                'icon',
                'project-version',
                'version',
                'size',
                'color',
                'theme'
              ].map((e, i) => {
                const href = `/docs/getting-icons/${e}`
                return (
                  <Link key={i} href={href}>
                    <section className={hightlight(href)}>{rmHyphen(e)}</section>
                  </Link>
                )
              })
            }
          </details>

          <details open={
            refs.currentDocHref.match(RegExp('^/docs/getting-info')) ? true : false
          }>
            <summary>Getting info</summary>
            {
              [
                'icon',
                'tag'
              ].map((e, i) => {
                const href = `/docs/getting-info/${e}`
                return (
                  <Link key={i} href={href}>
                    <section className={hightlight(href)}>{rmHyphen(e)}</section>
                  </Link>
                )
              })
            }
          </details>
        </aside>
        <section className={styles.articleWrapper}>
          <article className={styles.article}>{children}</article>
          <section className={styles.pages}>
            {
              previousDoc ?
                <Link href={refs.previousDocHref ?? ''}>
                  <button>
                    <Image
                      src='/img/icon/left.svg'
                      width={12}
                      height={12}
                      alt='Left'
                      priority={true} />
                    {previousDoc}
                  </button>
                </Link>
                : <section></section>
            }
            {
              nextDoc ?
                <Link href={refs.nextDocHref ?? ''}>
                  <button>
                    {nextDoc}
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
