import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import ReqResExample from '@/app/components/ReqResExample'

export default function Page() {
  return (
    <Docs refs={{
      previousDoc: { link: '/docs/getting-info/tag', label: 'Getting info: Tag' },
      currentDoc: '/docs/ways-of-use/img',
      nextDoc: { link: '/docs/ways-of-use/nextjs-image', label: 'Ways of use: Next.js <Image/>' }
    }}>
      <h2>&lt;img/&gt;</h2>
      <p>
        Under construction.
      </p>
    </Docs>
  )
}
