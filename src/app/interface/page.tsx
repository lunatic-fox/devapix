'use client'
import styles from './page.module.css'
import Image from 'next/image'
import { useId } from 'react'
import Preview from './components/Preview'

export default function Page() {
  const inputsIds = Object.fromEntries(['iid', 'pvid', 'vid', 'cid', 'tid', 'sid', 'submitId'].map(k => [k, useId()]))
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image
          src='/img/logo.svg'
          width={24}
          height={24}
          alt='Devapix logo'
          priority={true}
          className={styles.headerLogo}
        />
        <section className={styles.headerDescription}>Interface</section>
      </header>
      <section className={styles.bigWrapper}>
        <input type='text' id={inputsIds.iid} name='icon' placeholder='icon' />
        <input type='text' id={inputsIds.pvid} name='project-version' placeholder='project-version' />
        <input type='text' id={inputsIds.vid} name='version' placeholder='version' />
        <input type='text' id={inputsIds.cid} name='color' placeholder='color' />
        <input type='button' id={inputsIds.tid} name='theme' value='themed' />
        <input type='text' id={inputsIds.sid} name='size' placeholder='size' />
        <input type="button" id={inputsIds.submitId} value="submit" />
        <Preview inputsIds={inputsIds}/>
      </section>
    </main>
  )
}
