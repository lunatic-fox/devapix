import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'

export default function Page() {
  return (
    <Docs refs={{
      currentDocHref: '/docs/introduction',
      nextDocHref: '/docs/getting-icons/icon'
    }}>
      <h2>Introduction</h2>
      <p>
        Devapix is the Devicon project API. Devicon is a set of icons representing programming languages, designing, and development tools.
      </p>
      <p>
        By using Devapix, the selected icon can be preflight modified in some properties, such as color and size. Also this API can return information about the icons.
      </p>
      <p>
        This API uses only GET method and the base URI is <Code ic={'https://devapix.vercel.app/api'} /> that will be represented through this documentation as <Code ic={'@[connector]'} /> symbol.
      </p>
    </Docs>
  )
}
