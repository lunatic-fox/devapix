'use client'
import styles from './page.module.css'
import Image from 'next/image'
import { useEffect, useId, useState } from 'react'
import Preview from './components/Preview'
import getProjectVersions from '../../functions/getProjectVersions'

export default function Page() {
  const inputsIds = Object.fromEntries(['iid', 'pvid', 'vid', 'cid', 'tid', 'sid', 'submitId'].map(k => [k, useId()]))

  const [pvs, setPvs] = useState({} as { [k: string]: string[] })

  useEffect(() => { getProjectVersions().then(e => setPvs(e)) }, [pvs])

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




      <section>
        <section>
          <h2>Search icon</h2>
          <input type='text' name='icon' />
        </section>

        <section>
          <div>R</div>
          <div>
            {pvs['r']?.map((f, i) => <input key={i} type='button' value={f} />)}
          </div>
        </section>

      </section>

      {/* <section className={styles.bigWrapper}>
        <div className={styles.formWrapper}>
        <input
          type='text'
          id={inputsIds.iid}
          name='icon'
          className={styles.formInput}
          placeholder='icon' />
        <input
          type='text'
          id={inputsIds.pvid}
          name='project-version'
          className={styles.formInput}
          placeholder='project-version' />
        <input
          type='text'
          id={inputsIds.vid}
          name='version'
          className={styles.formInput}
          placeholder='version' />
        <input
          type='text'
          id={inputsIds.cid}
          name='color'
          className={styles.formInput}
          placeholder='color' />
        <input
          type='button'
          className={styles.formInput}
          id={inputsIds.tid}
          name='theme'
          value='theme' />
        <input
          type='text'
          id={inputsIds.sid}
          name='size'
          className={styles.formInput}
          placeholder='size' />
        <input
          type='button'
          id={inputsIds.submitId}
          className={styles.formInput}
          value='submit' />
        </div>
        <Preview inputsIds={inputsIds} />
      </section> */}
    </main>
  )
}
