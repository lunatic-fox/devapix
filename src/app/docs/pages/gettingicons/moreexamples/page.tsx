import Code from '@/app/components/Code'
import Table from '@/app/components/Table'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: More examples'>
      <p>
        This is a example of getting a icon using its alternative name, in this case, using <Code ic='x'/> instead of <Code ic='twitter'/>. Also using more parameters: <Code ic='release'/>, <Code ic='size'/> and <Code ic='color'/>.
      </p>
      <Code c={`GET /api?{iconName}&r={release}&s={size}&c={color}`} /><Code></Code>
      <h4>Example</h4>
      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'x'],
        ['release | r', 'dev'],
        ['size | s', '96'],
        ['color | c', 'green'],
      ]}/>
      <ReqResExample reqs={['x&r=dev&s=96&c=green']} title={false}/>

      <hr />

      <p>
        In these next examples let's use the <Code ic='theme'/> parameter.
      </p>
      <Code c={`GET /api?{iconName}&r={release}&s={size}&t={theme}`} /><Code></Code>
      <h4>Examples</h4>
      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'github'],
        ['release | r', '2.10'],
        ['size | s', '64'],
        ['theme | t', 'light'],
      ]}/>
      <ReqResExample reqs={['github&r=2.10&s=64&t=light']} title={false}/>
      <hr />
      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'github'],
        ['release | r', '2.10'],
        ['size | s', '64'],
        ['theme | t', 'dark'],
      ]}/>
      <ReqResExample reqs={['github&r=2.10&s=64&t=dark']} title={false}/>
      <hr />

      <p>
        This example shows <Code ic='theme'/> parameter priority over <Code ic='color'/>.
      </p>
      <Code c={`GET /api?{iconName}&r={release}&s={size}&t={theme}&c={color}`} /><Code></Code>
      <h4>Example</h4>
      <Table header={['Parameter', 'Value']} rows={[
        ['iconName', 'github'],
        ['release | r', '2.10'],
        ['size | s', '72'],
        ['theme | t', 'light'],
        ['color | c', 'ff00ff']
      ]}/>
      <ReqResExample reqs={['gitlab&r=2.10&s=72&t=dark&c=ff00ff']} title={false}/>
    </Docs>
  )
}
