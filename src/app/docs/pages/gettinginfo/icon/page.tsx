import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting info: Icon'>
      <p>
        It is possible to get information, based on <Code ic='devicon.json' /> file, about the icon via <Code ic='project' /> response property. Also check the request values through <Code ic='request' /> if the properties to modify the icon are passed.
      </p>
      <Code c='@[connector]/info?[ICON_NAME]' />
      <ReqResExample reqs={['elixir', 'rust']} info={true}/>
      <p>
        Notice in <Code ic='rust' /> info request that the <Code ic='version' /> property refers to <Code ic='plain' /> icon version, but since this icon version is not present into the latest project version, the API request points to <Code ic='original' /> icon version instead. Also CSS color is automatically converted to its corresponding hexadecimal color.
      </p>
    </Docs>
  )
}
