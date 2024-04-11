import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: Color'>
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
