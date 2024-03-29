import Code from '@/components/Code'
import Docs from '@/components/Docs'
import ReqResExample from '@/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDoc: {
          link: '/docs/getting-icons/version',
          label: 'Getting icons: Version'
        },
        currentDoc: '/docs/getting-icons/size',
        nextDoc: {
          link: '/docs/getting-icons/color',
          label: 'Getting icons: Color'
        }
      }}>
      <h2>
        Getting icons: Size
      </h2>
      <p>
        <Code ic='size' /> is an optional property that can be specified by the key <Code ic='size' /> or <Code ic='s' />. Its value have to be an <Code ic='integer' /> to change the icon size in pixels.
      </p>
      <Code c={`
        @[connector]?[ICON_NAME]&size=[SIZE]
        @[connector]?[ICON_NAME]&s=[SIZE]`} />

      <ReqResExample reqs={[
        'javascript&size=256',
        'javascript&s=96'
      ]} />
    </Docs>
  )
}
