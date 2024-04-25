import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
        <section className={styles.headerDescription}>Devapix</section>
      </header>
      <section className={styles.bigWrapper}>
        <Link href='https://devicon.dev'>
          <section className={styles.card}>
            <Image
              src='https://devapix.vercel.app/api?devicon'
              width={48}
              height={48}
              alt='Devicon Logo'
              priority={true} />
            <article>
              <p className={styles.cardTitle}>Go to Devicon project</p>
              <p className={styles.cardDescription}>
                Find out more about the project that originated this API.
              </p>
            </article>
          </section>
        </Link>

        <Link href='/docs'>
          <section className={styles.card}>
            <Image
              src='/img/icon/docs.svg'
              width={48}
              height={48}
              alt='Devapix Logo'
              priority={true} />
            <article>
              <p className={styles.cardTitle}>Docs</p>
              <p className={styles.cardDescription}>
                Read Devapix documentation and learn how to use this powerful API.
              </p>
            </article>
          </section>
        </Link>

        {/* <Link href='#'>
          <section className={styles.card}>
          <section className={styles.underConstruction}>
          <Image
              src='/img/under-construction.svg'
              width={300}
              height={300}
              alt='Under construction'
              priority={true} />
          </section>
            <Image
              src='/img/logo.svg'
              width={48}
              height={48}
              alt='Devapix Logo'
              priority={true} />
            <article>
              <p className={styles.cardTitle}>Interactive API</p>
              <p className={styles.cardDescription}>
                Use Devapix API through a graphic user interface.
              </p>
            </article>
          </section>
        </Link> */}

      </section>
    </main>
  )
}
