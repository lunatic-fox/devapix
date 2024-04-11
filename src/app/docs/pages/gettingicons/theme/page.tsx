import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting icons: Theme'>
      <p>
        <Code ic='theme' /> is an optional property that can be specified by the key <Code ic='theme' /> or <Code ic='t' />. Its values can be <Code ic='dark' /> or <Code ic='d' />, and <Code ic='light' /> or <Code ic='l' />. This property has priority over <Code ic='color' />, in other words, if both properties are present only <Code ic='theme' /> will work.
      </p>
      <p>
        Like <Code ic='color' />,  this property only works on icons with one color, therefore if the default icon has more than one color it returns the <Code ic='plain' /> icon instead.
      </p>

      <Code c={`
        @[connector]?[ICON_NAME]&theme=dark
        @[connector]?[ICON_NAME]&t=d`} />

      <ReqResExample reqs={[
        'p5js&theme=dark',
        'p5js&t=l'
      ]} />
    </Docs>
  )
}
