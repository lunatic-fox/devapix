import Code from '@/components/Code'
import Docs from '@/components/Docs'
import ReqResExample from '@/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDoc: {
          link: '/docs/getting-icons/project-version',
          label: 'Getting icons: Project Version'
        },
        currentDoc: '/docs/getting-icons/version',
        nextDoc: {
          link: '/docs/getting-icons/size',
          label: 'Getting icons: Size'
        }
      }}>
      <h2>
        Getting icons: Version
      </h2>
      <p>
        <Code ic='version' /> is an optional property that is used to specify the icon version. The property key can be <Code ic='version' /> or <Code ic='v' /> and its values can be <Code ic='original' /> or <Code ic='o' />, <Code ic='original-wordmark' /> or <Code ic='ow' />, <Code ic='plain' /> or <Code ic='p' />, <Code ic='plain-wordmark' /> or <Code ic='pw' />, <Code ic='line' /> or <Code ic='l' /> and <Code ic='line-wordmark' /> or <Code ic='lw' />.
      </p>
      <Code c={`
        @[connector]?[ICON_NAME]&version=[VERSION]
        @[connector]?[ICON_NAME]&v=[VERSION]`} />

      <ReqResExample reqs={[
        'apache&version=original-wordmark',
        'apache&v=ow'
      ]} />
    </Docs>
  )
}
