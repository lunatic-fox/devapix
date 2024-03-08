import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import ReqResExample from '@/app/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDocHref: '/docs/getting-icons/version',
        currentDocHref: '/docs/getting-icons/size',
        nextDocHref: '/docs/getting-icons/color'
      }}>
      <h2>
        Getting Icons: Size
      </h2>
      <p>
        <Code ic='size' /> is an optional property that can be specified by the key <Code ic='size' /> or <Code ic='s' />. Its value have to be an <Code ic='integer' /> to change the icon size in pixels.
      </p>
      <Code c={`
        @[connector]/[ICON_NAME],size:[SIZE]
        @[connector]/[ICON_NAME],s:[SIZE]`} />

      <ReqResExample reqs={[
        'javascript,size:256',
        'javascript,s:96'
      ]} />
    </Docs>
  )
}
