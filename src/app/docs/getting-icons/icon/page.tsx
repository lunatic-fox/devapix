import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import ReqResExample from '@/app/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDocHref: '/docs/introduction',
        currentDocHref: '/docs/getting-icons/icon',
        nextDocHref: '/docs/getting-icons/project-version'
      }}>
      <h2>
        Getting Icons: Icon
      </h2>
      <p>
        <Code ic='icon' /> is a mandatory implicit property of the API request, when alone and if it is a valid technology name or alternative name, the request returns the default icon for the specified technology.
      </p>
      <Code c={`@[connector]?[ICON_NAME]`} />

      <ReqResExample reqs={['java']} />
    </Docs>
  )
}
