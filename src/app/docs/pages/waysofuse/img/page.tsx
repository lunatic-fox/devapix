import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Ways of use: <img>'>
      <p>
        This is the basic and more direct approach of how to use Devapix into your project. Let's take a look at an example inside a <Code ic='.html' /> file.
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
