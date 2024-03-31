import Docs from '@/app/docs/components/Docs'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Page() {
  return (
    <Docs refs={{ currentDoc: 'credits' }}>
      <h2>Credits</h2>
      <p>
      <Link href='https://github.com/lunatic-fox/devapix'>Devapix</Link> is an extension project to <Link href='https://github.com/devicons/devicon/'>Devicon</Link> created by <Link href='https://github.com/lunatic-fox'>Josélio Júnior a.k.a. Lunatic Fox</Link> and powered by <Link href='https://vercel.com/'>Vercel</Link>.
      </p>
      <p>
        The main goals of this project is to offer an alternative way to get icons from Devicon and add functionality to the original project.
      </p>
      <p>
        Thank you all people of Devicon community. ❤️
      </p>
      <div className={styles.logoBox}>
        <Image
          src='https://devapix.vercel.app/api?devicon'
          width={64}
          height={64}
          alt='Devicon logo'/>
        <Image
          src='https://devapix.vercel.app/api?vercel&t=d'
          width={64}
          height={64}
          alt='Vercel logo'/>
        <Image
          src='https://devapix.vercel.app/api?nextjs&t=d'
          width={64}
          height={64}
          alt='Next.js logo'/>
        <Image
          src='/img/logo.svg'
          width={64}
          height={64}
          alt='Devapix logo'/>
      </div>
    </Docs>
  )
}
