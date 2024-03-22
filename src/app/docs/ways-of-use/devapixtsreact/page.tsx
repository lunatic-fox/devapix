import Code from '@/components/Code'
import Docs from '@/components/Docs'
import ReqResExample from '@/components/ReqResExample'

export default function Page() {
  return (
    <Docs refs={{
      previousDoc: {
        link: '/docs/ways-of-use/devapixreact',
        label: 'Ways of use: @devapix/react'
      },
      currentDoc: '/docs/ways-of-use/devapixtsreact'
    }}>
      <h2>@devapix/ts-react</h2>
      <p>
        To use <Code ic='<Devicon>' /> React element with TypeScript React you just need to install <Code ic='@devapix/ts-react' /> npm package.
      </p>
      <Code c='npm i @devapix/ts-react' />
      <p>
        After installation, the next step is to import the module to your project <Code ic='.tsx' /> file.
      </p>
      <Code
        h='tsx'
        c={`import Devicon from '@devapix/ts-react'`} />
      <p>
        Then call <Code ic='<Devicon>' /> React element into <Code ic='.tsx' /> file, like in the example below.
      </p>
      <h4>Example</h4>
      <h5>page.tsx</h5>
      <Code
        h='tsx'
        c={`
        import Devicon from '@devapix/ts-react'

        export default function Page() {
          return (
            <section>
              <h2>TypeScript logo</h2>
              <Devicon icon='typescript'/>
            </section>
          )
        }
      `} />
      <p>This example is equivalent to the request below.</p>
      <ReqResExample
        title={false}
        reqs={['typescript']} />
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
        projectVersion: string
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
      <h4>Rust icon</h4>
      <h5>page.tsx</h5>
      <Code
        h='tsx'
        c={`
        import Devicon from '@devapix/ts-react'

        export default function Page() {
          return (
            <section>
              <h2>Rust logo</h2>
              <Devicon 
                icon='rust'
                projectVersion='2.15.1'
                version={'p'}
                color='#3ab048'
                size={64}/>
            </section>
          )
        }
      `} />
      <ReqResExample
        title={false}
        reqs={['rust&pv=2.15.1&v=p&c=3ab048&s=64']} />
      <hr />
      <h4>ChakraUI icon</h4>
      <h5>page.tsx</h5>
      <Code
        h='tsx'
        c={`
        import Devicon from '@devapix/ts-react'

        export default function Page() {
          return (
            <section>
              <h2>ChakraUI logo</h2>
              <Devicon 
                icon='rust'
                projectVersion='2.15.1'
                version={'p'}
                theme={'dark'}
                size={64}/>
            </section>
          )
        }
      `} />
      <ReqResExample
        title={false}
        reqs={['chakraui&pv=dev&v=p&t=d&s=64']} />
    </Docs>
  )
}
