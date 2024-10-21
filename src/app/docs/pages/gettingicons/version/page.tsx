import Code from '@/app/components/Code'
import Table from '@/app/components/Table'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: Version'>
      <p>
        <Code ic='version' /> is an optional property that is used to specify the icon version. The property key can be <Code ic='version' /> or <Code ic='v' /> and its values can be <Code ic='original' /> or <Code ic='o' />, <Code ic='original-wordmark' /> or <Code ic='ow' />, <Code ic='plain' /> or <Code ic='p' />, <Code ic='plain-wordmark' /> or <Code ic='pw' />, <Code ic='line' /> or <Code ic='l' /> and <Code ic='line-wordmark' /> or <Code ic='lw' />.
      </p>
      <Code c={`
        GET /api?{iconName}&version={version}
        GET /api?{iconName}&v={version}`} />

      <h4>Examples</h4>
      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'apache'],
        ['version', 'original-wordmark']
      ]} />
      <ReqResExample reqs={['apache&version=original-wordmark']} title={false} />

      <hr />

      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'apache'],
        ['v', 'ow']
      ]} />
      <ReqResExample reqs={['apache&v=ow']} title={false} />

    </Docs>
  )
}
