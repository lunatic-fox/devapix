'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useId, useState } from 'react'
import styles from './index.module.css'
import DOCS_INDEX from '../../res/docsIndex'

export default function Docs({ title, children }: {
  title: string
  children: React.ReactNode
}) {
  const titleKey = title.replace(/[^a-z]/gi, '').toLowerCase()
  const cPos = Object.keys(DOCS_INDEX).indexOf(titleKey)
  const indexPos = {
    previous: cPos > 0 ? DOCS_INDEX[Object.keys(DOCS_INDEX)[cPos - 1]] : null,
    current: DOCS_INDEX[titleKey],
    next: cPos < Object.keys(DOCS_INDEX).length ? DOCS_INDEX[Object.keys(DOCS_INDEX)[cPos + 1]] : null
  }

  const sidebarId = useId()
  const [headerOptions, setHeaderOptions] = useState(false)
  const handleHeaderOptions = (ev: React.MouseEvent) => {
    setHeaderOptions(!headerOptions)
    const sidebarElement = document.getElementById(sidebarId) as HTMLElement
    sidebarElement.style.display = headerOptions ? 'none' : 'block'
  }

  const highlight = (href: string) => indexPos.current.path === href ? styles.sidebarOn : ''

  const handleOpenIndex = (topic: string, array?: boolean) => {
    if (array) {
      const pDocsIndex = Object.values(DOCS_INDEX).filter(v => v.path.includes(topic))
      const topicLabel = pDocsIndex[0].label.replace(/^(.+?):.+/, '$1')
      const aDocsIndex = pDocsIndex.map(v => ({
        path: v.path,
        label: v.label.replace(/^.+?:\s(.+)/, '$1')
      }))

      return (
        <details open={indexPos.current.path.includes(topic)}>
          <summary>{topicLabel}</summary>
          {
            aDocsIndex.map((e, i) =>
              <Link key={i} href={e.path}>
                <section className={highlight(e.path)}>{e.label}</section>
              </Link>)
          }
        </details>
      )
    }

    return (
      <Link href={DOCS_INDEX[topic].path}>
        <section className={highlight(DOCS_INDEX[topic].path)}>{
          DOCS_INDEX[topic].label
        }</section>
      </Link>
    )
  }

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
            {handleOpenIndex('introduction')}
            {handleOpenIndex('gettingicons', true)}
            {handleOpenIndex('gettinginfo', true)}
            {handleOpenIndex('waysofuse', true)}
            {handleOpenIndex('credits')}
          </div>
        </aside>
        <section className={styles.articleWrapper}>
          <article className={styles.article}>
            <h2>{title}</h2>
            {children}
          </article>
          <section className={styles.pages}>
            {
              indexPos.previous ?
                <Link href={indexPos.previous.path}>
                  <button>
                    <Image
                      src='/img/icon/left.svg'
                      width={12}
                      height={12}
                      alt='Left'
                      priority={true} />
                    {indexPos.previous.label}
                  </button>
                </Link>
                : <section></section>
            }
            {
              indexPos.next ?
                <Link href={indexPos.next.path}>
                  <button>
                    {indexPos.next.label}
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
