import Code from '@/app/components/Code'
import Table from '@/app/components/Table'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: Icon'>
      <p>
        <Code ic='icon' /> is a required implicit property of the API request, when alone and if it is a valid technology name or alternative name, the request returns the default icon for the specified technology.
      </p>
      <Code c={`GET /api?{iconName}`} />

      <h4>Example</h4>
      <Table header={['Parameter', 'Value']} rows={[['iconName', 'java']]}/>
      <ReqResExample reqs={['java']} title={false}/>
    </Docs>
  )
}
