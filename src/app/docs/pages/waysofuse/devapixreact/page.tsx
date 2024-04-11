import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Ways of use: @devapix/react'>
      <p>
        To use <Code ic='<Devicon>' /> React element with React you just need to install <Code ic='@devapix/react' /> npm package.
      </p>
      <Code c='npm i @devapix/react' />
      <p>
        After installation, the next step is to import the module to your project <Code ic='.jsx' /> file.
      </p>
      <Code
        h='jsx'
        c={`import Devicon from '@devapix/react'`} />
      <p>
        Then call <Code ic='<Devicon>' /> React element into <Code ic='.jsx' /> file, like in the example below.
      </p>
      <h4>Example</h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
        import Devicon from '@devapix/react'

        export default function Page() {
          return (
            <section>
              <h2>JavaScript logo</h2>
              <Devicon icon='javascript'/>
            </section>
          )
        }
      `} />
      <p>This example is equivalent to the request below.</p>
      <ReqResExample
        title={false}
        reqs={['javascript']} />
      <br />
      <p>
        The properties expected by <Code ic='Devicon' /> are the same of API request.
      </p>
      <Code
        h='ts'
        c={`
        // Mandatory property
        icon: string

        // Optional properties
        release: string
        version:
            'o'  | 'original'
          | 'p'  | 'plain'
          | 'l'  | 'line'
          | 'ow' | 'original-wordmark'
          | 'pw' | 'plain-wordmark'
          | 'lw' | 'line-wordmark'
        color: string
        theme: 'd' | 'dark' | 'l' | 'light'
        size: number
      `} />
      <p>
        Here we have two more examples using the rest of properties.
      </p>
      <h4>Twitter icon</h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
        import Devicon from '@devapix/react'

        export default function Page() {
          return (
            <section>
              <h2>Twitter logo</h2>
              <Devicon 
                icon='twitter'
                release='2.15.1'
                version={'p'}
                color='#c7bd2b'
                size={64}/>
            </section>
          )
        }
      `} />
      <ReqResExample
        title={false}
        reqs={['twitter&r=2.15.1&v=p&c=c7bd2b&s=64']} />
      <hr />
      <h4>ChakraUI icon</h4>
      <h5>page.jsx</h5>
      <Code
        h='jsx'
        c={`
        import Devicon from '@devapix/react'

        export default function Page() {
          return (
            <section>
              <h2>ChakraUI logo</h2>
              <Devicon 
                icon='rust'
                release='2.15.1'
                version={'p'}
                theme={'light'}
                size={64}/>
            </section>
          )
        }
      `} />
      <ReqResExample
        title={false}
        reqs={['chakraui&r=dev&v=p&t=l&s=64']} />
    </Docs>
  )
}
