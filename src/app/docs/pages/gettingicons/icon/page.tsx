import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: Icon'>
      <p>
        <Code ic='icon' /> is a required implicit property of the API request, when alone and if it is a valid technology name or alternative name, the request returns the default icon for the specified technology.
      </p>
      <Code c={`@[connector]?[ICON_NAME]`} />
      <ReqResExample reqs={['java']} />
    </Docs>
  )
}
