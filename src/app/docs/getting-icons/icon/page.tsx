import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import ReqResExample from '@/app/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDoc: { link: '/docs/introduction', label: 'Introduction' },
        currentDoc: '/docs/getting-icons/icon',
        nextDoc: { link: '/docs/getting-icons/project-version', label: 'Getting icons: Project Version' }
      }}>
      <h2>
        Getting icons: Icon
      </h2>
      <p>
        <Code ic='icon' /> is a required implicit property of the API request, when alone and if it is a valid technology name or alternative name, the request returns the default icon for the specified technology.
      </p>
      <Code c={`@[connector]?[ICON_NAME]`} />
      <ReqResExample reqs={['java']} />
    </Docs>
  )
}
