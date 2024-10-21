import Code from '@/app/components/Code'
import Table from '@/app/components/Table'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: Release'>
      <p>
        It is possible to get an icon from a previous or next release of Devicon by specifying the project version through <Code ic='release' /> or <Code ic='r' /> key.
      </p>
      <Code c={`
        GET /api?{iconName}&release={release}
        GET /api?{iconName}&r={release}
      `} />
      <p>
        Property value can be <Code ic='dev' /> or <Code ic='develop' /> to access the development branch and get early access to new icons. Or, in order to get previous icon releases, the value can be the project version number since version <Code ic='2.7' />. Versions before <Code ic='2.7' /> will not work because Devicon project compatibility.
      </p>

      <h4>Examples</h4>
      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'chakraui'], 
        ['r', 'dev']
      ]}/>
      <ReqResExample reqs={['chakraui&r=dev']} title={false}/>

      <hr />
      
      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'php'], 
        ['r', '2.7']
      ]}/>
      <ReqResExample reqs={['php&r=2.7']} title={false}/>

      <hr />

      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'twitter'],
        ['release (implicit)', 'fallback to latest']
      ]}/>
      <ReqResExample reqs={['twitter']} title={false}/>

      <hr />

      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'twitter'],
        ['release', '2.15.1']
      ]}/>
      <ReqResExample reqs={['twitter&release=2.15.1']} title={false}/>

      <hr />

      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'rust'],
        ['release (implicit)', 'fallback to latest']
      ]}/>
      <ReqResExample reqs={['rust']} title={false}/>

      <hr />

      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'rust'],
        ['release', '2.15.1']
      ]}/>
      <ReqResExample reqs={['rust&release=2.15.1']} title={false}/>
      <p>
        When the release is not specified the request returns the latest released icon for the named technology.
      </p>
    </Docs>
  )
}
