import Code from '@/components/Code'
import Docs from '@/components/Docs'
import ReqResExample from '@/components/ReqResExample'

export default function Page() {
  return (
    <Docs refs={{
      previousDoc: {
        link: '/docs/getting-info/tag',
        label: 'Getting info: Tag'
      },
      currentDoc: '/docs/ways-of-use/img',
      nextDoc: {
        link: '/docs/ways-of-use/nextjs-image',
        label: 'Ways of use: Next.js <Image>'
      }
    }}>
      <h2>{`<img>`}</h2>
      <p>
        This is the basic and more direct approach of how to use Devapix into your project. Let's take a look to an example inside a <Code ic='.html' /> file.
      </p>
      <h5>index.html</h5>
      <Code
        h='html'
        c={`
          <html>
            <body>
              <img src="https://devapix.vercel.app/api?html5"/>
            </body>
          </html>
      `} />
      <ReqResExample
        title={false}
        reqs={['html5']} />
      <p>
        <Code ic='src' /> is the only attribute needed of <Code ic='<img>' /> to receive the API request.
      </p>
      <p>
        The tag <Code ic='<img>' /> also work in React projects since <Code ic='.jsx' /> or <Code ic='.tsx' /> extensions.
      </p>
    </Docs>
  )
}
