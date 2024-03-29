import Code from '@/components/Code'
import Docs from '@/components/Docs'

export default function Page() {
  return (
    <Docs refs={{
      currentDoc: '/docs/introduction',
      nextDoc: {
        link: '/docs/getting-icons/icon',
        label: 'Getting icons: Icon'
      }
    }}>
      <h2>Introduction</h2>
      <p>
        Devapix is a derivative Devicon project to serve icons through an API. Devicon is a set of icons representing programming languages, designing, and development tools.
      </p>
      <p>
        The main feature of Devapix is to modify icons in some properties such as color and size on the fly. However, it is possible to have information about icons and early access to new ones as well.
      </p>
      <p>
        This API uses only GET method and the base URL is <Code ic={'https://devapix.vercel.app/api'} /> that will be represented through this documentation as <Code ic={'@[connector]'} /> symbol.
      </p>
    </Docs>
  )
}
