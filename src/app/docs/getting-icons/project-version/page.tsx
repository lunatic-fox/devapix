import Code from '@/app/components/Code'
import Docs from '@/app/components/Docs'
import ReqResExample from '@/app/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDocHref: '/docs/getting-icons/icon',
        currentDocHref: '/docs/getting-icons/project-version',
        nextDocHref: '/docs/getting-icons/version'
      }}>
      <h2>
        Getting Icons: Project Version
      </h2>
      <p>
        It is possible to get an icon from a previous version of Devicon by specifying the version after the technology name.
      </p>
      <Code c={'@[connector]/[ICON_NAME]@[PROJECT_VERSION]'} />

      <ReqResExample reqs={[
        'twitter',
        'twitter@2.15.1'
      ]} />

      <p>
        When the project version is not specified the request returns the latest project version icon for the named technology.
      </p>
    </Docs>
  )
}
