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
        It is possible to get an icon from a previous or next version of Devicon by specifying the version through <Code ic='project-version' /> or <Code ic='pv' /> key.
      </p>
      <Code c={`
        @[connector]?[ICON_NAME]&project-version=[PROJECT_VERSION]
        @[connector]?[ICON_NAME]&pv=[PROJECT_VERSION]
      `} />
      <p>
        Property value can be <Code ic='dev' /> or <Code ic='develop' /> to access the development branch and get early access to new icons or the project version number since version <Code ic='2.7' />. Versions before <Code ic='2.7' /> will not work because project compatibility.
      </p>
      <ReqResExample reqs={[
        'chakraui&pv=dev',
        'php&pv=2.7',
        'twitter',
        'twitter&project-version=2.15.1',
        'rust',
        'rust&pv=2.15.1'
      ]} />
      <p>
        When the project version is not specified the request returns the latest project version icon for the named technology.
      </p>
    </Docs>
  )
}
