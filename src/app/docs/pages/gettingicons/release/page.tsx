import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: Release'>
      <p>
        It is possible to get an icon from a previous or next release of Devicon by specifying the project version through <Code ic='release' /> or <Code ic='r' /> key.
      </p>
      <Code c={`
        @[connector]?[ICON_NAME]&release=[RELEASE]
        @[connector]?[ICON_NAME]&r=[RELEASE]
      `} />
      <p>
        Property value can be <Code ic='dev' /> or <Code ic='develop' /> to access the development branch and get early access to new icons. Or, in order to get previous icon releases, the value can be the project version number since version <Code ic='2.7' />. Versions before <Code ic='2.7' /> will not work because Devicon project compatibility.
      </p>
      <ReqResExample reqs={[
        'chakraui&r=dev',
        'php&r=2.7',
        'twitter',
        'twitter&release=2.15.1',
        'rust',
        'rust&r=2.15.1'
      ]} />
      <p>
        When the release is not specified the request returns the latest released icon for the named technology.
      </p>
    </Docs>
  )
}
