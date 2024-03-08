import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import Link from 'next/link'

export default function Page() {
  return (
    <Docs refs={{ currentDocHref: '/docs/credits' }}>
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
    </Docs>
  )
}
