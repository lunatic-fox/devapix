import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDoc: {
          link: 'getting-icons/icon',
          label: 'Getting icons: Icon'
        },
        currentDoc: 'getting-icons/project-version',
        nextDoc: {
          link: 'getting-icons/version',
          label: 'Getting icons: Version'
        }
      }}>
      <h2>
        Getting icons: Project Version
      </h2>
      <p>
        It is possible to get an icon from a previous or next version of Devicon by specifying the project version through <Code ic='project-version' /> or <Code ic='pv' /> key.
      </p>
      <Code c={`
        @[connector]?[ICON_NAME]&project-version=[PROJECT_VERSION]
        @[connector]?[ICON_NAME]&pv=[PROJECT_VERSION]
      `} />
      <p>
        Property value can be <Code ic='dev' /> or <Code ic='develop' /> to access the development branch and get early access to new icons. Or, in order to get previous icon versions, the value can be the project version number since version <Code ic='2.7' />. Versions before <Code ic='2.7' /> will not work because Devicon project compatibility.
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
