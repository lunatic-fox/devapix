import Code from '@/app/components/Code'
import Table from '@/app/components/Table'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: Size'>
      <p>
        <Code ic='size' /> is an optional property that can be specified by the key <Code ic='size' /> or <Code ic='s' />. Its value have to be an <Code ic='integer' /> to change the icon size in pixels.
      </p>
      <Code c={`
        GET /api?{iconName}&size={size}
        GET /api?{iconName}&s={size}`} />

      <h4>Examples</h4>
      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'javascript'],
        ['size', '256']
      ]} />
      <ReqResExample reqs={['javascript&size=256']} title={false} />

      <hr />

      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'javascript'],
        ['s', '96']
      ]} />
      <ReqResExample reqs={['javascript&s=96']} title={false} />
    </Docs>
  )
}
