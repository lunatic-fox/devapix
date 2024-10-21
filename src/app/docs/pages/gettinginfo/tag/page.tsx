import Code from '@/app/components/Code'
import Table from '@/app/components/Table'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting Info: Tag'>
      <p>
        <Code ic='tag' /> property allows access to a list of icon names that have the same searched tag value in their <Code ic='tags' /> array of <Code ic='devicon.json' /> file.
      </p>
      <Code c='GET /api/info?tag={tag}' />

      <h4>Example</h4>
      <Table header={['Parameter', 'Value']} rows={[['tag', 'language']]} />
      <ReqResExample reqs={['tag=language']} info={true} title={false} />
    </Docs>
  )
}
