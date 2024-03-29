import Code from '@/components/Code'
import Docs from '@/components/Docs'
import ReqResExample from '@/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDoc: {
          link: '/docs/getting-icons/size',
          label: 'Getting icons: Size'
        },
        currentDoc: '/docs/getting-icons/color',
        nextDoc: {
          link: '/docs/getting-icons/theme',
          label: 'Getting icons: Theme'
        }
      }}>
      <h2>
        Getting icons: Color
      </h2>
      <p>
        <Code ic='color' /> is an optional property that can be specified by the key <Code ic='color' /> or <Code ic='c' />. Its value have to be a hexadecimal or CSS valid color.
      </p>
      <p>
        Hexadecimal color must not contain <Code ic='#' /> symbol, otherwise the icon will not be colored as expected.
      </p>
      <p>
        This property colors only icons with one color, therefore if the default icon has more than one color it returns the <Code ic='plain' /> icon instead.
      </p>
      <Code c={`
        @[connector]?[ICON_NAME]&color=[COLOR]
        @[connector]?[ICON_NAME]&c=[COLOR]`} />

      <ReqResExample reqs={[
        'python&color=f0a',
        'python&c=gold'
      ]} />
    </Docs>
  )
}
