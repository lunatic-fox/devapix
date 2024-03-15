import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import ReqResExample from '@/app/components/ReqResExample'

export default function Page() {
  return (
    <Docs refs={{
      previousDoc: { link: '/docs/ways-of-use/img', label: 'Ways of use: <img/>' },
      currentDoc: '/docs/ways-of-use/nextjs-image',
      nextDoc: { link: '/docs/ways-of-use/deviconjs', label: 'Ways of use: devicon.js' }
    }}>
      <h2>Next.js &lt;Image/&gt;</h2>
      <p>
        Under construction.
      </p>
    </Docs>
  )
}
