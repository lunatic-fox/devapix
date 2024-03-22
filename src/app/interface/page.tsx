'use client'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useId, useState } from 'react'

export default function Page() {
  const [iid, pvid, vid, cid, tid, sid, submitId] = Array.from(Array(7), () => useId())
  const PreviewImg = () => {
    const [req, setReq] = useState({} as {[k: string]: string})
    useEffect(() => {
      const submitButton = document.getElementById(submitId) as HTMLInputElement
      submitButton.onclick = () => {
        const [
          icon, 
          projectVersion, 
          version, 
          color, 
          theme, 
          size
        ] = [iid, pvid, vid, cid, tid, sid].map(id => document.getElementById(id) as HTMLInputElement)
        const reqObj: {[k: string]: string} = {}
        reqObj.i = icon.value
        reqObj.pv = projectVersion.value
        reqObj.v = version.value
        reqObj.c = color.value
        reqObj.t = theme.value
        reqObj.s = size.value

        Object.entries(reqObj).forEach(([k, v]) => {
          if (v === '')
            delete reqObj[k]
        })
        
        setReq(reqObj)
      }
    }, [])
    return (
      <section className={styles.preview}>
        <Image
          src={`https://devapix.vercel.app/api?${req.i ? req.i : ''}${
            req.i ? 
            ['pv', 'v', 'c', 't', 's'].map(k => req[k] && `&${k}=${req[k]}`).join('')
            : ''
          }`}
          width={req.s && !isNaN(+req.s) ? +req.s : 128}
          height={req.s && !isNaN(+req.s) ? +req.s : 128}
          alt='preview'
          priority={true}/>
        
      </section>
    )
  }

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
        <input type='text' id={iid} name='icon' placeholder='icon' />
        <input type='text' id={pvid} name='project-version' placeholder='project-version' />
        <input type='text' id={vid} name='version' placeholder='version' />
        <input type='text' id={cid} name='color' placeholder='color' />
        <input type='text' id={tid} name='theme' placeholder='theme' />
        <input type='text' id={sid} name='size' placeholder='size' />
        <input type="button" id={submitId} value="submit" />
        <section>
          <div>Preview</div>
          <div className={styles.previewWrapper}>
            <section className={styles.chessWrapper}>
              <input type='button' className={styles.lChessBtn}/>
              <input type='button' className={styles.dChessBtn}/>
              <input type='button' className={styles.wChessBtn}/>
              <input type='button' className={styles.bChessBtn}/>
              <section className={styles.cChessBtn}>
                <label htmlFor='chessColorPicker' className={styles.mask}></label>
                <input type="color" name='chess' id='chessColorPicker'/>
              </section>
            </section>
            <PreviewImg />
          </div>
        </section>

      </section>
    </main>
  )
}
