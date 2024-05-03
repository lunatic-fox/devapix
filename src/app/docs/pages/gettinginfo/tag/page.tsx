import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting Info: Tag'>
      <p>
        <Code ic='tag' /> property allows access to a list of icon names that have the same searched tag value in their <Code ic='tags' /> array of <Code ic='devicon.json' /> file.
      </p>
      <Code c='@[connector]/info?tag=[TAG]' />
      <ReqResExample reqs={['tag=language']} info={true}/>
    </Docs>
  )
}
